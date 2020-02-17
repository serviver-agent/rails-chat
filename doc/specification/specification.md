# rails-chat仕様
## User

- Userは参加しているRoom一覧を見ることが出来る
- Userは自身の名前を変更する事が出来る
- Userは自身のUserを削除することが出来る

## Room
- Roomは自身に参加しているUser一覧を取得することが出来る
- RoomはRoomに送信されたMessageを送信順に取得することが出来る
- Roomは現在取得しているMessageより新しいMessageが送信されたら、新しいMessageを取得する事が出来る
 - Userは参加する自身を除いた1人以上のUserとRoomの名前を指定してRoomを作成する事が出来る

- Userは自身の作成したRoomに参加するUserを更新する事が出来る
- Userは自身の作成したRoomの名称を変更する事が出来る
- Userは自身の作成したRoomを削除する事が出来る

## Message
- Userは参加しているRoomでMessageを送信する事ができる
- Userは自身の作成したMessageの文章を更新することが出来る
- Userは自身の作成したMessageを削除する事が出来る

## 後で追加するかもしれない仕様
- ユーザ登録
- ログイン機構
- ユーザアイコン
- フォロー・フォロワー機能
- 既読、未読機能


 

