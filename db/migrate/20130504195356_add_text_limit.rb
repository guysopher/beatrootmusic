class AddTextLimit < ActiveRecord::Migration
  def up
    change_column :pages, :content, :text, :limit => nil
d
  end

  def down
  end
end
