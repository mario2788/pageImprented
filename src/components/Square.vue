

<script setup>

    const props = defineProps(
        ['title', 'arrayContent', 'lista']
    )

    console.log( props );
</script>


<template>
    
    <div class="container">
    
        <p class="title">
            <i>
                {{ title }}
            </i>
        </p>
        
        <div class="box">

            <p v-if="lista" v-for="item in arrayContent">
                <b class="label">
                    {{ item.label }}
                </b>
                <span>
                    {{ item.field }}
                </span>
            </p>

            <p v-else v-for="item in arrayContent">
                <li>
                    <b class="label">
                    {{ item.label }}
                    </b>
                    <span>
                        {{ item.field }}
                    </span>
                </li>
                <p class="element">
                    <b class="label">
                    {{ item.label2 }}
                    </b>
                    <span>
                        {{ item.field2 }}
                    </span>
                </p>
                <p class="element"> 
                    <b class="label">
                    {{ item.label3 }}
                    </b>
                    <span>
                        {{ item.field3 }}
                    </span>
                </p>
            </p>
        </div>

    </div>

</template>


<style scoped>

    p{
        margin-block: 0.5rem;
    }

    li{
        margin-left: 1rem;
    }

    .container{
        padding-inline: 1rem;
    }

    .title{
        font-size: 1rem;
        font-weight: 500;
    }

    .label{
        margin-right: 0.5rem;
    }

    .box{
        border: 1px solid #000000;
        box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
        border-radius: 7px;
        padding-left: 1rem;
        padding-block: 1rem;
        /* width: 100%; */
    }

    .element{
        margin-left: 1.5rem;
    }
</style>


