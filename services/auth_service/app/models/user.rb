class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  
  has_many :payment_methods, dependent: :destroy
  has_one :subscription, dependent: :destroy

  def generate_jwt
    JWT.encode(
      { 
        id: id,
        email: email,
        exp: 60.days.from_now.to_i 
      },
      Rails.application.credentials.secret_key_base
    )
  end
end
