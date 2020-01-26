class HomeController < ApplicationController
  def index
    redirect_to :file => "public/game.html"
  end
end
