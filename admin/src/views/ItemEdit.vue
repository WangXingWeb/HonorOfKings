<template>
    <div class="about">
        <h1>{{ id ? '编辑' : '新建' }}物品</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="图标">
                <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers="getAuthHeader()"
                :show-file-list="false"
                :on-success="afterUpload"
                >
                <img v-if="model.icon" :src="model.icon" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>    
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    props:{
        id:{}
    },
    data(){
        return {
            model:{},
        }
    },
    methods:{
        async save(){
            if(this.id){
                //更新
                await this.$http.put(`rest/items/${this.id}`,this.model)
                //新建
            }else{
                await this.$http.post('rest/items',this.model)
            }
            this.$router.push('/items/list')
            this.$message({
                type:'success',
                message:'保存成功'
            })
        },
        async fetch(){
            const res = await this.$http.get(`rest/items/${this.id}`)
            this.model = res.data
        },
        afterUpload(res){
            console.log(res);
            // vue中响应数据的问题
            this.$set(this.model,'icon',res.url)
        }
        
    },
    created(){
        this.id && this.fetch()
    }
}
</script>

