# frozen_string_literal: true

require "./modules/user.rb"

class UserCurdUsecase
  # def create end

  def list
    users = User.all
    users
  end

  def update(user_id, name)
    user = User.find_by(id: user_id)
    user.update(name: name)
  end

  def delete(user_id)
    user = User.find_by(id: user_id)
    user.delete
  end
end
