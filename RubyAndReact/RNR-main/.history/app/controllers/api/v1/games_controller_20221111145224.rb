class Api::V1::GamesController < ApplicationController
  before_action :set_game, only: %i[:show, :update, :destroy]
  wrap_parameters format: []
  # before_action :authenticate_user!
  # this is done
  def index
    @games = Game.all
    render json: @games
  end
#this is done
  def show
    @games = Game.find_by(id:params[:id])
    if @games
    render json: @games, status: :ok
    else
      render json: {error:"Not Found"}, status: :not_found
    end
  end

 def create
    @games = Game.new(name: valid_params[:name], release_date: valid_params[:release_date],
    platforms: valid_params[])
  end

 def update
    @games = Game.find_by(id: params[:id])
    if @games
      @games.update(name: params[:name], release_date: params[:release_date],
      platforms: params[:platforms], genres: params[:genres])
      render json: { message: 'Updated'}, status: :ok
    else
      render json: { message: 'Unable to be updated'}, status: :unprocessable_entity
    end
  end
#this is done
  def destroy
    @games = Game.find_by(id: params[:id])
    if @games
      @games.destroy
      render json: {message:'Destroyed'}, status: :ok
    else
      render json: {error: 'Unable to Destroy'}, status: :internal_server_error
    end
  end

  private

  def set_game
    @game = Game.find(params[:id])
  end
#inside of the function [] includes the attributes of the api
  def valid_params
    params.require(:game).permit([:name, :release_date, :platforms, :genres])
  end
end
