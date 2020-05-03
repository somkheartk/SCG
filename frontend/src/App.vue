
  <template>
  <div id="app">

    <b-navbar toggleable="md" type="primary" variant="info">
      <b-nav>
        <b-nav-item to="/Page1">DOSCG HOME</b-nav-item>
        <b-nav-item to="/Page2">GET X</b-nav-item>
        <b-nav-item to="/Page2">GET Y</b-nav-item>
        <b-nav-item to="/Page2">MY CV</b-nav-item>
      </b-nav>
    </b-navbar>
    <router-view></router-view>


<div><footer class="">

  <!-- Copyright -->
  <div  class="footer" > DOSCG TEST BY SOMKHEART KRAISIN 
  </div>
  <!-- Copyright -->

</footer></div>
  </div>
  </template>

<script>
export default {
  name: 'app'
}
</script>

  <style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
</style>
  