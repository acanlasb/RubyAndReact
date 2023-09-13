Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    namespace :v1 do
        resources :games, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
