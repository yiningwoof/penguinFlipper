class Api::V1::PenguinsController < ApplicationController

  before_action :set_penguin, only: [:show, :update, :destroy]

  def index
    @penguins = Penguin.all
    render json: @penguins
  end

  def show
    render json: @penguin
  end

  def update
    if @penguin.update(penguin_params)
      render json: @penguin
    else
      render json: @penguin.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @penguin.destroy
  end

  def set_penguin
    @penguin = Penguin.find(params[:id])
  end

  def penguin_params()
    params.require(:penguin).permit(:species, :description, :link, pictures: [])
  end

end
