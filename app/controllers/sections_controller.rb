class SectionsController < ApplicationController
  layout 'admin'
  active_scaffold :section do |conf|
  end
end 