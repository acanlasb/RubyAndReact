class Api::V1::GamesController < ApplicationController
  before_action :set_game, only: %i[:show, :update, :destroy]
  wrap_parameters format: []
  # before_action :authenticate_user!
  def index
    @games = Game.all
    render json: @games
  end

  def show
    @games = Game.find_by(id:params[:id])
    if @games
    render json: @games, status: :ok
    else
      render json: {error:"Not Found"}, status: :not_found
    end
  end
  def new
    @game = Article.new
  end

 def create
    @games = Game.new(valid_params)
    # if @games.save
      render json: @game, status: :created
    # else
    #   render json: { error: "Unable to create" }, status: :unprocessable_entity
    # end
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

  def valid_params
    params.require(:game).permit([:name, :release_date, :platforms, :genres])
  end
end
