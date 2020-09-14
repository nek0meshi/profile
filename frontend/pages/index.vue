<template>
  <div>
    <GlobalHeader />
    <main class="">
      <div class="hero-image">
        <img src="images/3565762_m.jpg" />
      </div>
      <section id="aboutSection" class="section side-gapped">
        <div>
          <h2 class="section-title">About</h2>
          <p>Webエンジニア.</p>
          <p>1992年生まれ.</p>
          <p>2011/04 - 2015/03 大阪大学基礎工学部システム科学科 卒業.</p>
          <p>
            2015/04 - 2017/03 大阪大学大学院基礎工学研究科システム創成専攻 修了.
          </p>
          <p>
            2016/12 - 2018/03 株式会社Silettの設立に参加（現在は解散）.
          </p>
          <p>
            2018/01 - 2020/03 株式会社SICデジタル.
          </p>
          <p>
            2020/04 - 現在 株式会社スマレジ.
          </p>
        </div>
      </section>
      <section id="skillsSection" class="section reversed-section side-gapped">
        <div>
          <h2 class="section-title">Skill</h2>
          <div class="skill-division">
            <h3 class="skill-title">サーバサイド</h3>
            <p>PHPでの開発歴4年程度. Laravelを中心に、CakePHP2など.</p>
          </div>
          <div class="skill-division">
            <h3 class="skill-title">フロントエンド</h3>
            <p>
              1.5年程度.Vue.jsでの開発が多く、HTML5/CSSS3、SCSS、jQuery、Nuxt.jsなど.
            </p>
          </div>
          <div class="skill-division">
            <h3 class="skill-title">iOS</h3>
            <p>1.5年程度. swift・storyboardを中心に. Objective-Cも少し.</p>
          </div>
          <div class="skill-division">
            <h3 class="skill-title">Others</h3>
            <p>短期間のみ経験したもの</p>
            <p>
              Python, AWS, C, VC++, C++(Linux), Java, Unity(C#),
              Line Messaging API、Angular8
            </p>
          </div>
        </div>
      </section>
      <section id="favoritesSection" class="section side-gapped">
        <h2 class="section-title">Favorites</h2>
        <div class="favorites-item">
          <div>
            <h3 class="favorite-title">バンド・ギター</h3>
            <p>高校・大学と部活でバンド・ギターをしていました.</p>
            <p>今でもたまに弾きますし、音楽を聴くのが大好きです.</p>
            <p>コピーしたのは、例えばAcidman、SHAKALABBITS、相対性理論、YUKI、スピッツ、...</p>
          </div>
          <img src="images/87384_s.jpg" />
        </div>
        <div class="favorites-item">
          <div>
            <h3 class="favorite-title">将棋</h3>
            <p>ここ最近はまっていのは将棋です.</p>
            <p>将棋ウォーズで初段を目指しています（今は1級）.</p>
            <p>振り飛車党です.</p>
            <p>観るのも好きです. 推しは木村九段.</p>
          </div>
          <img src="images/495678_s.jpg" />
        </div>
      </section>
    </main>
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'
export default {
  components: {
    GlobalHeader,
    GlobalFooter,
  },
}
</script>

<style lang="scss" scoped>
@import '~/node_modules/bulma';
.hero-image {
  // width: calc(30rem * 1920 / 568);
  // height: 30rem;
  > img {
    @media (max-width: $desktop) {
      object-fit: cover;
      height: 250px;
    }
  }
}
.section {
  padding-bottom: 4rem;
}
.section-title {
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 2rem;
}
.reversed-section {
  background-color: #14213d;
  color: #eef;
}
.skill-division {
  padding-bottom: 1.5rem;

  .skill-title {
    font-size: 1.5rem;
  }

  p {
    padding: 0 0.5rem;
  }
}
.favorite-title {
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
}
.favorites-item {
  display: flex;
  &:nth-child(2n) {
    flex-direction: row-reverse;
  }
  @media (max-width: $desktop) {
    flex-direction: column-reverse;
    &:nth-child(2n) {
      flex-direction: column-reverse;
    }
  }

  > div,
  > img {
    width: 50%;
    padding: 3px;
    margin-bottom: 1rem;
    @media (max-width: $desktop) {
      width: 100%;
    }
  }
  > div {
    padding: 1rem;
  }
}
</style>
