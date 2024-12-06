class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :created_at, :subscription_status

  def subscription_status
    object.subscription&.status || 'inactive'
  end
end
