class ApplicationController < ActionController::Base
  protect_from_forgery

  def index
    @pages = Page.order("'order'")
  end

end
