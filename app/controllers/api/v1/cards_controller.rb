class Api::V1::CardsController < ApplicationController

  before_action :set_card, only: [:show, :update, :destroy]

  def index
    @cards = Card.all
    render json: @cards
  end

  def show
    render json: @card
  end

  def update
    if @card.update(card_params)
      render json: @card
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @card.destroy
  end

  def set_card
    @card = Card.find(params[:id])
  end

  def card_params()
    params.require(:card).permit(:game_id, :penguin_id)
  end

end
