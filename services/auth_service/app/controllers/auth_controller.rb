class AuthController < ApplicationController
  skip_before_action :authenticate_user!, only: [:login, :register]

  def login
    user = User.find_by(email: params[:email])
    if user&.valid_password?(params[:password])
      render json: { 
        token: user.generate_jwt,
        user: UserSerializer.new(user)
      }
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def register
    user = User.new(user_params)
    if user.save
      render json: {
        token: user.generate_jwt,
        user: UserSerializer.new(user)
      }, status: :created
    else
      render json: { errors: user.errors }, status: :unprocessable_entity
    end
  end

  def me
    render json: current_user, serializer: UserSerializer
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :password_confirmation)
  end
end
