import { defineLocaleExternal } from './external'

export default defineLocaleExternal(
  'jp',
  {
    /* Editor */
    placeholder: '内容を入力してください...',
    noComment: 'コメントなし',
    send: 'コメントを送信',
    save: 'コメントを保存',
    nick: 'ニックネーム',
    email: 'Eメール',
    link: 'ウェブサイト',
    emoticon: '絵文字',
    preview: 'プレビュー',
    uploadImage: '画像をアップロード',
    uploadFail: 'アップロードに失敗しました',
    commentFail: 'コメントに失敗しました',
    restoredMsg: '内容が自動的に復元されました',
    onlyAdminCanReply: '管理者のみがコメントできます',
    uploadLoginMsg: '名前とメールアドレスを入力してからアップロードしてください',

    /* List */
    counter: '{count}件のコメント',
    sortLatest: '最新',
    sortOldest: '最古',
    sortBest: '人気',
    sortAuthor: '著者',
    openComment: 'コメントを表示',
    closeComment: 'コメントを非表示',
    listLoadFailMsg: 'コメントリストのデータを取得できません',
    listRetry: '再試行するにはクリック',
    loadMore: 'もっと読み込む',

    /* Comment */
    admin: '管理者',
    reply: '返信',
    voteUp: '賛成',
    voteDown: '反対',
    voteFail: '投票に失敗しました',
    readMore: '続きを読む',
    actionConfirm: '操作を確認',
    collapse: '折り畳む',
    collapsed: '折りたたまれた',
    collapsedMsg: 'このコメントはシステムまたは管理者によって折りたたまれました',
    expand: '展開',
    approved: '承認済み',
    pending: '保留中',
    pendingMsg: '審査中、自分自身のみが表示できます。',
    edit: '編集',
    editCancel: '編集をキャンセル',
    delete: '削除',
    deleteConfirm: '削除を確認',
    pin: 'ピン留め',
    unpin: 'ピン留めを解除',

    /* Time */
    seconds: '秒前',
    minutes: '分前',
    hours: '時間前',
    days: '日前',
    now: 'たった今',

    /* Checker */
    adminCheck: '管理者として認証するにはパスワードを入力してください：',
    captchaCheck: '続行するにはキャプチャを入力してください：',
    confirm: '確認',
    cancel: 'キャンセル',

    /* Sidebar */
    msgCenter: '通知センター',
    ctrlCenter: 'コントロールセンター',
    emailVerified: 'メールアドレスが確認されました',

    /* General */
    frontend: 'フロントエンド',
    backend: 'バックエンド',
    loading: '読み込み中',
    loadFail: '読み込みに失敗しました',
    editing: '編集中',
    editFail: '編集に失敗しました',
    deleting: '削除中',
    deleteFail: '削除に失敗しました',
    reqGot: 'リクエストが受信されました',
    reqAborted: 'リクエストがタイムアウトまたは予期せず中止されました',
    updateMsg: '完全な体験を得るにはArtalk {name}を更新してください',
    currentVersion: '現在のバージョン',
    ignore: '無視',
    open: '開く',
    openName: '{name}を開く',
  },
  ['jp-JP'],
)
