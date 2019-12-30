class Api::V1::PenguinPicturesController < ApplicationController

  before_action :set_penguin, only: [:show, :update, :destroy]

  def index
    @all_penguins = Penguin.all
    @all_pics = []
    @all_penguins.each{ |p| 
      phash = {}
      phash["penguin_id"] = p.id
      phash["penguin_pics"] = []
      p.pictures.each{ |pic| 
        # phash["penguin_pics"].push(rails_blob_path(pic), deposition: "attachment")
        phash["penguin_pics"].push(url_for(pic))
    @all_pics.push(phash)}
    }
    render json: @all_pics.uniq
  end

  def show
    @penguin_id = @penguin.id
    @penguin_pictures = {}
    @penguin_pictures["penguin_id"] = @penguin_id
    @penguin_pictures["penguin_pics"] = []
    @penguin.pictures.each{ |pic|
      @penguin_pictures["penguin_pics"].push(url_for(pic))
  }
    render json: @penguin_pictures
  end

  # def update
  #   if @penguin.update(penguin_params)
  #     render json: @penguin
  #   else
  #     render json: @penguin.errors, status: :unprocessable_entity
  #   end
  # end

  # def destroy
  #   @penguin.destroy
  # end

  def set_penguin
    @penguin = Penguin.find(params[:id])
  end

  def penguin_params()
    params.require(:penguin).permit(:species, :description, :link, pictures: [])
  end

end
