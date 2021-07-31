<template>
    <div id="app">

    <vueper-slides id="slideshow">
        <vueper-slide
        v-for="(slide,i) in slides" v-bind:key="i" v-bind:title="slide.title" v-bind:content="slide.content"/>
    </vueper-slides>

    <big-link>
            <div id="bigmenulink">
            {/* <!-- <a href="/menu.html"> Menu </a> --> */}
            <a v-bind:href="html" >
                <img v-bind:src= "img" id="menulinkpic"/>
            </a>
            {/* {{info}} */}
            </div>
    </big-link>

    <div id="tag-caption">
        <p> The best BBQ on the Southside!</p>
    </div>

    {/* <!-- <div id="info-div"> --> */}
    <big-link id="info-div">
        <div id="bigaboutlink">
            {/* <!-- <a href="/about.html"> About </a> --> */}
            <a v-bind:href="html">
                <img v-bind:src= "img" />
                <section>
                    <p> {/*  <!--TODO? textview component--> */}
                    {{info}}
                    </p>
                </section>
            </a>
        </div>
        <div id="biglocationlink">
            <p>Check us out!</p>
            <img v-bind:src="img"/>
        </div>
    </big-link>

    </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

// export default {
//   components: {'big-link': }
//     },
// })

Vue.component('big-link', {
  props: ['biglink'],
  template: '<div>{{biglink.data.info}}<br>{{biglink.data.html}}</div>'
})

var bigmenulink = new Vue(
  {
    el: '#bigmenulink',
    data: {
      info: 'Look at the menu.',
      html: 'menu.html',
      img: 'images/BBQRibs.jpg',
      id: 1
    }
  }
)
var bigaboutlink = new Vue(
  {
    el: '#bigaboutlink',
    data: {
      info: 'Learn more about the restaurant.',
      html: 'about.html',
      img: 'images/alvinyoungcooking.jpg',
      id: 0
    }
  }
)
</script>
