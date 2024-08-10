<template>
    <div id = "outletapp">
        <div class="btns">
              <tr class="data-tr" v-for="item in itemList">
                   <td class="data-td">{{item.value1}}</td>
                    <td class="data-td">{{item.value2}}</td>
                     <td class="data-td">
                          <button class="buttonCurd" @click="update(item)">Update</button> | 
                           <button class="buttonCurd" @click="del(item.id)">Delete</button>
                      </td>
                 </tr>
        </div>
        <div class="modal-mask" v-if="updateModal">
            <modal-pop-box :ariaLabel="modalName" :ariaShow=true :itemId="countInfo.itemId" @getUpdateModal="getUpdateModal">
                <div slot="body">
                    <table>
                        <tr>
                            <td class="alignright"><label for="manage_accout">key1:</label></td>
                            <td class="alignleft"><input name="manage_accout" type="text" v-model="pars.value1"></td>
                        </tr>
                        <tr>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td class="alignright"><label for="queue_accout">key2:</label></td>
                            <td class="alignleft"><input name="queue_accout" type="text" v-model="pars.value2"></td>
                        </tr>
                    </table>
                </div>
                <div slot="btns">
                    <button type="submit" @click="updateSubmit(pars.id)">Submit</button>
                </div>
            </modal-pop-box>
        </div>
        <div class="modal-mask" v-if="deleteModal">    
            <modal-pop-box :ariaLabel="modalName" :ariaShow=true v-if="deleteModal" :itemId="countInfo.itemId" @getDeleteModal="getDeleteModal">
                <div slot="body">
                    确认删除该条信息么？
                </div>
                <div slot="btns">
                    <button @click="deleteSubmit(pars.id)">确认</button>
                        
                    <button @click="deleteClose()">取消</button>
                </div>
            </modal-pop-box>
        </div>
        <div class="modal-mask" v-if="promptModal">
            <modal-pop-box :ariaLabel="modalName" :ariaShow=true v-if="promptModal" @getPromptModal="getPromptModal">
                <div slot="body">
                    {{desc}}
                </div>
                <div slot="btns">
                    <button @click="closePrompt()">OK</button>
                </div>
            </modal-pop-box>
        </div>
    </div>
</template>
<script>
import modalPopBox from 'gypmodal.vue' 
   var vm = {
        data:function(){
            return {
               updateModal:false,
               deleteModal:false,
               promptModal:false,
               pars:{
                    value1:'',
                    value2:'',
                    id:0
               },
               desc:'',
               modalName:'',
               itemList:{},
               parentTotal:0,
               parentCurrentPage:1,
               parentPagesize:10,
               queryParams:{
                  otherParams:'',
                  pagesize:10,
                  pageNum:1
               },
            }
        },
        methods:{
            update:function(obj){
                this.updateModal = true;
                this.pars.itemId = parseInt(obj.id);
                this.pars.value1 = obj.value1;
                this.pars.value2 = obj.value2;
                this.modalName = "Update"
            },
            del:function(idx){
                this.deleteModal = true;
                this.pars.id = parseInt(idx);
                this.modalName = "Delete"
            },
            updateSubmit:function(idx){
                this.pars.id=idx;
                this.$http.post('',this.pars,{emulateJSON:true}).then(function(res){
                    this.updateModal = false;
                    this.parentCallback(this.queryParams);
                    },function(res){
                         this.desc= res.desc;
                         this.promptModal = true;
                     } 
                 )      
            },
            deleteSubmit:function(idx){
                this.pars.id=idx;
                 this.$http.post('',this.pars.id,{emulateJSON:true}).then(function(res){
                     this.deleteModal = false;
                     this.parentCallback(this.queryParams);
                    },function(res){
                        this.desc= 'ajax failure';
                        this.deleteModal = false;
                        this.promptModal = true;
                        this.modalName = "Prompt"
                     } 
                 )  
            },
            deleteClose:function(){
                this.deleteModal = false;
            },
            getUpdateModal:function(par){
                this.updateModal = par;
            },
            getDeleteModal:function(par){
                this.deleteModal = par;
            },
            getPromptModal:function(par){
                this.promptModal = par;
            },
            closePrompt:function(){
                this.promptModal = false;
            }
        },
        beforeCreate:function(){
            // 初始化请求一下数据,本例中使用的是本地数据
            var res= jsontest2;
            var tem = res;
            this.itemList = tem.rows;
            this.parentTotal = parseInt(tem.total);
        },
        created:function(){
            var _self = this;
            _self.parentCallback(_self.queryParams);
        },
        components:{
            modalPopBox
        }
    }
 export default vm
 // vm.testhook = 2
</script>
<style> 
.modal-mask{
    position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(100, 100, 100, .5);
        display: table;
        transition: opacity 1s ease;
}
.buttonCurd{
    color:#0000ff;
    cursor:pointer;
}
.buttonCurd:hover{
    color:#882222;
}
.alignright{
    text-align:right;
    padding-right:6px;
}
.alignleft{
    text-align:left;
}
</style>    
                