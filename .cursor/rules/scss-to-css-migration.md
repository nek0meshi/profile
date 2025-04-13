# SCSSからCSSへの移行ガイドライン

- 新規コンポーネントはSCSSではなくCSSを使用する
- CSS変数を活用して変数機能を代替する
- ネスト構造は避け、命名規則でカプセル化を表現する
- なるべくVue.jsのscoped cssを利用する。そのためBEMは不要。え

## 命名規則
- カラー変数: --color-main, --color-text
- フォントサイズ: --font-size-small, --font-size-large
- スペーシング: --spacing-small, --spacing-large 
