require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get get_loc" do
    get :get_loc
    assert_response :success
  end

end
