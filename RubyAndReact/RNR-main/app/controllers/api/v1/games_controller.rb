class Api::V1::GamesController < ApplicationController
  before_action :set_game, only: %i[:show, :create, :update, :destroy]
  wrap_parameters format: []
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
#mass assignment
 def create
    @games = Game.create(
    name: game_params[:name],
    release_date: game_params[:release_date],
    platforms: game_params[:platforms],
    genres: game_params[:genres],
    )
    if @games
      @games.save
       render json: @games, status: :created
    else
      render json: {error: "Error creating the game"}, status: :unprocessable_entity
    end
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
    @games = Game.find_by(params[:id])
  end
#inside of the function [] includes the attributes of the api
  def game_params
    params.permit([:name, :release_date, :platforms, :genres])
  end
end
