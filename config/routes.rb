Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :dudes, only: [:index, :update]
    get 'my_dudes', to: 'dudes#my_dudes'
  end

end
