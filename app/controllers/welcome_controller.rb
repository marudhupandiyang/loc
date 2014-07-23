class WelcomeController < ApplicationController
  def index

  	@location = request.location

  	@custom_ip = '116.0.0.1'
  	@custome = Geocoder.address(@custom_ip);
  	

  end

  def get_loc
  end
end
