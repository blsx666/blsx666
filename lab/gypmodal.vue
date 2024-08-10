<template>
	<div id ="modalPopBox" v-if="innerAriaShow">
		<div class="el-modal-wrapper">
			<div class="el-modal-box">
				<div class="el-modal-header">
					<span class="el-modal-title">{{ariaLabel}}</span>
					<span class="close" @click="closeModal()">x</span>
				</div>
				<div class="el-modal-content">
					<slot name="body"></slot>
				</div>
				<div class="el-modal-btns">
					<slot name="btns"></slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'modalPopBox',
		props:{
			ariaLabel:{
				type:String,
				default:'prompt'
			},
			ariaShow:{
				type:Boolean,
				default:false
			},
			itemId:{
				type:Number
			}
		},
		data:function(){
			return {
				innerAriaShow:this.ariaShow,
				updateModal:'',
				deleteModal:'',
				addModal:'',
				promptModal:''
			}
		},
		methods:{
			closeModal:function(){
				this.innerAriaShow = false;
				if(this.ariaLabel=='Update'){
					this.updateModal=false;
					this.$emit('getUpdateModal',this.updateModal);
				}
				if(this.ariaLabel=='Delete'){
					this.deleteModal=false;
					this.$emit('getDeleteModal',this.deleteModal);
				}
				if(this.ariaLabel=='New'){
					this.addModal = false;
					this.$emit('getAddModal',this.addModal);
				}
				if(this.ariaLabel=='Prompt'){
					this.promptModal = false;
					this.$emit('getPromptModal',this.promptModal);
				}
			}
		}
	}
</script>
<style>
	#modalPopBox{
		position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /*background-color: rgba(0, 0, 0, .5);*/
        display: table;
        transition: height 2s ease;
	}
	.el-modal-wrapper{
		display:table-cell;
		vertical-align:middle;
	}
	.el-modal-box{
		width:400px;
		margin:0 auto;
		border-radius:6px;
		/*height:300px;*/
		padding:10px 30px;
		background-color:#fff;
		border-radius:2px;
		box-shadow:0 2px 8px ragb(0,0,0,0.33);
		/*transition:all 1s ease;*/
		font-family:Helvetica,Arial,sans-serif;
		transition: height 2s ease;
	}
	.el-modal-header{
		height:30px;
		line-height:30px;
	}
	.el-modal-header .el-modal-title{
		font-size:16px;
		font-weight: bold;
		color:#333;
	}
	.el-modal-header .close{
		position:relative;
		top:0;
		left:350px;
		width:30px;
		height:30px;
		cursor:pointer;
	}
	.el-modal-header .close:hover{
		color:#f44;
	}
	.el-modal-content{
		margin:0 auto;
		text-align:center;
		padding:10px 10px;
	}
	.el-modal-btns{
		text-align:center;
		padding:10px 0;
	}
	.el-modal-btns button{
		/*width:60px;*/
		border-radius:5px;
		background-color: #409eff;
		padding:6px 10px;
		cursor:pointer;
		color:#fff;
		border-color:#409eff;
		border-style:none;
	}
 
</style>