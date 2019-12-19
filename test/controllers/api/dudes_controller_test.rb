require 'test_helper'

class Api::DudesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_dudes_index_url
    assert_response :success
  end

  test "should get update" do
    get api_dudes_update_url
    assert_response :success
  end

end
