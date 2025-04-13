<script setup lang="ts">
import AppContainer from '~/components/parts/AppContainer.vue'
import HistoryCard from './HistoryCard'

const histories = [
  {
    title: 'フリーランス',
    period: '2024/09〜現在',
    description: 'フリーランスWebエンジニアとして活動している。',
    techStacks: ['Laravel', 'React', 'TypeScript', 'GraphQL'],
  },
  {
    title: '株式会社スマレジ',
    period: '2020/04〜2024/08',
    description:
      'Webエンジニアとして、勤怠管理の自社サービスの開発に携わっている。' +
      'リードエンジニアとして、重要度の高い実装や上流寄りの工程、チームイベントの企画・主催等を担当。' +
      'Linter・FormatterやTypeScriptとReactの導入等のレガシー改善にも力を入れている。',
    techStacks: [
      'PHP',
      'TypeScript',
      'React',
      'CakePHP2',
      'jQuery',
      'SCSS',
      'Laravel',
      'Vue.js',
    ],
  },
  {
    title: '株式会社SICデジタル',
    period: '2018/01〜2020/03',
    description:
      'Webアプリ開発やiOSアプリ開発を担当。' +
      '1~10人月程度の小規模な新規開発・改修に携わった。',
    techStacks: ['Laravel', 'Vue.js', 'iOS/swift', 'Objective-C'],
  },
  {
    title: '株式会社Silett',
    period: '2016/12~2017/12',
    description:
      '研究室の同期の起業に参加した。' +
      '自社制作の対話システムを活用したアプリケーション制作に携わった。' +
      'スマホアプリのクライアント部、サーバ部、インフラ周りなどを担当した。',
    techStacks: ['iOS/swift', 'PHP', 'C#', 'AWS', 'Line Messaging API'],
  },
  {
    title: '大阪大学・大阪大学大学院',
    period: '2011/04〜2017/03',
    description:
      '学部の授業でプログラミングを学び、研究室ではコミュニケーションロボットに関する研究に携わった。' +
      'Pythonを利用し、心拍データの加工・計算や、統計解析などを行った。' +
      'Java・C++を利用し、コミュニケーションロボットの挙動を制御するシステムを制作した。',
    techStacks: ['Python', 'Java', 'C++'],
  },
]
</script>

<template>
  <app-container id="history" title="HISTORY" is-gray>
    <ul class="flex flex-col mx-auto history-card-list">
      <history-card
        v-for="history in histories"
        :key="history.title"
        :title="history.title"
        :period="history.period"
        :description="history.description"
        :tech-stacks="history.techStacks"
        class="history-card"
      />
    </ul>
  </app-container>
</template>

<style lang="scss" scoped>
/**
 * style tagを削除するとscript tagがstyle tagと誤認されてsassエラーが発生する.
 */
</style>
