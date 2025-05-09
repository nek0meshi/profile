# 開発方針など

- モダンブラウザを対象とする。
- CSS/SCSSの命名規則はBEMを採用しない。
- UIコンポーネントは再利用可能な形で作成する。
- レスポンシブデザインに対応する（モバイル、タブレット、デスクトップ）。
- アニメーションは控えめに使用し、UXを向上させる目的で使用する。
- アクセシビリティに配慮する。
- パフォーマンスを考慮し、不要なレンダリングを避ける。
- コードの可読性を重視し、適切なコメントを残す。
- 今後SCSSを除去してCSSに置き換える想定。
- 実装の都度 npm run lint:fix を実行する。
- package.jsonのdependencies/devDependenciesの編集はnpmコマンドを利用して行う。