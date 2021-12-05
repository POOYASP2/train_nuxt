<template>
  <div class="index_container">
    <section class="index_container_logo">
      <img
        class="index_container_logo-img"
        src="~/static/images/1.svg"
        width="300"
        height="auto"
      />
      <div
        style="display: flex; flex-direction: column; justify-content: center"
      >
        <h1>لورم ایپسوم متن</h1>
        <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h2>
      </div>
      <div class="scrolldown-wrapper">
        <div class="scrolldown">
          <svg height="30" width="10">
            <circle class="scrolldown-p1" cx="5" cy="15" r="2" />
            <circle class="scrolldown-p2" cx="5" cy="15" r="2" />
          </svg>
        </div>
      </div>
    </section>
    <section class="section_two">
      <div class="section_two-dis">
        <h3>یک عنوان بولد</h3>
        <p>
          یک توضیح بسیط برای بیان کردن ویژگی های مهم شرکت مانند اینکه چه اهداف
          بزرگی دارد و یا مشتریان اصلی آن چه کسانی هستند
        </p>
      </div>
      <img src="~/static/images/2.svg" width="300" height="auto" />
    </section>
    <UserCart />
    <UserSlider />
  </div>
</template>

<script>
import UserCart from '@/components/UserCart.vue'
import UserSlider from '@/components/UserSlider.vue'
export default {
  components: {
    UserCart,
    UserSlider,
  },
}
</script>
<style scoped>
.index_container {
  text-align: center;
  padding-top: 1em;
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
}
.index_container_logo {
  display: flex;
  width: 100%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='950' height='500' preserveAspectRatio='none' viewBox='0 0 950 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1248%26quot%3b)' fill='none'%3e%3crect width='950' height='500' x='0' y='0' fill='rgba(108%2c 85%2c 249%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c290.701C52.68%2c281.41%2c94.881%2c245.296%2c134.652%2c209.522C169.347%2c178.314%2c189.775%2c137.561%2c214.353%2c97.892C242.837%2c51.918%2c292.311%2c12.304%2c290.326%2c-41.743C288.324%2c-96.248%2c237.716%2c-133.915%2c204.258%2c-176.99C168.777%2c-222.669%2c141.107%2c-277.408%2c88.538%2c-301.533C32.641%2c-327.185%2c-32.83%2c-330.108%2c-91.873%2c-312.89C-150.97%2c-295.657%2c-200.136%2c-254.77%2c-238.07%2c-206.289C-274.785%2c-159.367%2c-298.726%2c-102.964%2c-302.649%2c-43.514C-306.405%2c13.408%2c-282.286%2c66.212%2c-259.502%2c118.511C-236.33%2c171.7%2c-217.42%2c231.011%2c-169.077%2c263.088C-120.51%2c295.314%2c-57.4%2c300.824%2c0%2c290.701' fill='%234225f7'%3e%3c/path%3e%3cpath d='M950 852.7180000000001C1029.87 866.6859999999999 1117.452 910.36 1187.7 869.869 1257.784 829.472 1253.939 727.607 1291.4189999999999 655.921 1331.686 578.904 1435.167 517.777 1416.12 432.98199999999997 1396.67 346.392 1267.57 342.134 1206.476 277.762 1149.649 217.88600000000002 1148.366 111.88799999999998 1075.163 73.733 1000.152 34.636000000000024 903.226 43.920000000000016 826.609 79.76999999999998 753.633 113.91699999999997 726.566 199.79000000000002 674.448 261.233 623.037 321.84299999999996 546.874 362.91999999999996 522.3199999999999 438.509 495.918 519.7860000000001 487.938 618.27 535.3779999999999 689.351 582.327 759.697 681.645 764.127 760.331 795.13 823.075 819.852 883.569 841.101 950 852.7180000000001' fill='%239685fb'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1248'%3e%3crect width='950' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  height: 500px;
  position: relative;
}
.index_container_logo-img {
  width: 40%;
  align-self: flex-end;
}
h1 {
  color: white;
  font-family: 'VazirB';
  font-weight: bold;
  font-size: 3em;
  margin-bottom: 15px;
  transform: translateY(-40px);
}
h2 {
  color: whitesmoke;
  font-size: 1em;
  transform: translateY(-40px);
}
.section_two {
  width: 100%;
  display: flex;
  margin: 7em 0;
  align-items: center;
  justify-content: space-around;
}
.section_two h3 p {
  font-size: 1.5em;
}
.section_two-dis {
  width: 40%;
}
.section_two-dis p {
  text-align: justify;
}
/* add icon  */
/* ############################## */
/* ###################################### */
.scrolldown-wrapper {
  left: 50%;
  position: absolute;
  text-align: center;
  bottom: 0;
  transform: translate(-50%, -50%);
}

.scrolldown {
  border: 2px solid #ffffff;
  border-radius: 30px;
  height: 46px;
  margin: 0 auto 8px;
  text-align: center;
  width: 30px;
}

.scrolldown-p1,
.scrolldown-p2 {
  animation-duration: 1.5s;
  animation-name: scrolldown;
  animation-iteration-count: infinite;
  fill: #ffffff;
}

.scrolldown-p2 {
  animation-delay: 0.75s;
}

@keyframes scrolldown {
  0% {
    opacity: 0;
    transform: translate(0, -8px);
  }
  50% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 8px);
  }
}
</style>
