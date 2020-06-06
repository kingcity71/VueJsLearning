<template>
    <div class="v-textfield">
        <label for="">
            {{label}}
            <input
             type="text"
             :value="value"
             @input="input"/>
        </label>
    </div>
</template>

<script>
export default {
    name:"v-textfield",
    props:{
        value:{
            type:[String,Number],
            default:''
        },
        label:{
            type: String,
            default:''
        }
    },
    data(){
        return{}
    },
    methods:{
        input(e){
            let value = e.target.value;
            this.$emit('input',value)
        }
    }
}
</script>