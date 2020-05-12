Feature('Search')


// 2つの列を持つDataTableを作成する
let data = new DataTable(['keyword', 'title'])

// DataTableに行を登録する
data.add([
    "ソフトウェアテスト技法練習帳",
    "ソフトウェアテスト技法練習帳 ～知識を経験に変える40問～"
]);
data.add(["ソフトウエア・テスト", "ソフトウエア・テスト PRESS"]);
data.add([
    "ソフトウェアテスト入門",
    "ソフトウェアテスト入門 押さえておきたい<<要点・重点>>"
]);
data.add([
    "マインドマップ",
    "［改訂新版］マインドマップから始めるソフトウェアテスト"
]);

// DataTableを渡すときはScenario()の前にData()を追加し引数として渡す
// シナリオ中では current 変数に現在の行が格納されている
Data(data).Scenario('Can Search From Top', (I, current) => {
    I.amOnPage('http://gihyo.jp/');
    I.fillField("#searchFormKeyword", current.keyword);
    I.click('検索')
    I.see(current.title)
})