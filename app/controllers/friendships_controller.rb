class FriendshipsController < ApplicationController	
  def create
    @friend = User.find(params[:friend_id])
  	@friendship = current_user.friendships.build(friend_id: @friend.id)
    @friendship.save
  end

  def destroy
    @friend = User.find(params[:id])
    @friendship = current_user.friendships.find_by_friend_id(@friend.id)
    @friendship.destroy
  end
end
