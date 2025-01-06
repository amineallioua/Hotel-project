<template>
<div class=" min-w-[267px] h-[215px] bg-[#F4F6F6] rounded-[20px] p-5  " >




    <div class=" flex items-center gap-3  ">
                    <div class=" h-7 w-7 rounded-[50%] bg-[#3A7988]  "></div>
                    <div class=" flex flex-col  gap-0 ">
                        <h1 class=" font-[500] text-[14px] text-[#3A7988] m-0 ">Username</h1>
                        <p class=" font-[400] text-[10px] text-[#3A7988] m-0">user contry</p>
                    </div>
                </div>
                <h2 class="font-[400]  text-[#3A7988]" > <span v-for="(item, index) in comment.rating" :key="index" >X</span></h2>
                <p class=" font-[400] text-[10px] text-[#3A7988] " v-if="this.comment" >
                            {{ comment.comment }}       </p>

</div>

</template>
<script>
export default {
    props: {
    comment: {
      type: Object, 
    },
  },
  mounted(){
    console.log(this.comment)
  }


}

</script>