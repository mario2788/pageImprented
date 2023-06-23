

<script setup>

    const props = defineProps(
        ['title', 'arrayContent', 'lista', 'part', 'parts']
    )

    let numerador = ''

    if(props.parts != null & props.parts != 1){
        numerador = `${props.part} de ${props.parts}`
    }

</script>


<template>
    
    <div class="container">
    
        <p class="title">
            <i>
                {{ title }}
            </i>
            <i class="parts">
                {{ numerador }}
            </i>
        </p>
        
        <div class="box">

            <p v-if="lista" v-for="item in arrayContent">
                <li>
                    <b class="label">
                    {{ item.label }} :
                    </b>
                    <span>
                        {{ item.field }}
                    </span>
                </li>
                <p class="element">
                    <b class="label">
                    {{ item.label2 }} :
                    </b>
                    <span>
                        {{ item.field2 }}
                    </span>
                </p>
                <p class="element"> 
                    <b class="label">
                    {{ item.label3 }} :
                    </b>
                    <span>
                        {{ item.field3 }}
                    </span>
                </p>
            </p>

            <p v-else v-for="item in arrayContent">
                <b class="label">
                    {{ item.label }} :
                </b>
                <span>
                    {{ item.field }}
                </span>
            </p>

        </div>
    </div>

</template>


<style scoped>

    p{
        margin-block: 0.4rem;
    }

    li{
        margin-left: 1rem;
    }

    .container{
        padding-inline: 0.6rem;
    }

    .title{
        margin-top: 0.2rem;
        font-size: 1.3rem;
        font-weight: 500;
    }

    .parts{
        margin-left: 1rem;
        font-size: 0.8rem;
    }

    .label{
        margin-right: 0.5rem;
    }

    .box{
        border: 1px solid #000000;
        box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
        border-radius: 7px;
        padding-left: 1rem;
        padding-block: 0.5rem;
        margin-bottom: 0.5rem;
        /* width: 100%; */
    }

    .element{
        margin-left: 1.5rem;
    }
</style>


