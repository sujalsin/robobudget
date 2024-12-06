Rails.application.routes.draw do
  scope '/api' do
    # Authentication routes
    post '/auth/login', to: 'auth#login'
    post '/auth/register', to: 'auth#register'
    get '/auth/me', to: 'auth#me'

    # Payment routes
    resources :payment_methods, only: [:index, :create, :destroy]
    resources :subscriptions, only: [:create, :show, :update]
    
    # Webhook routes
    post '/webhooks/stripe', to: 'webhooks#stripe'
  end
end
