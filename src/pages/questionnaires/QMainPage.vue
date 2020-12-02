<template>
	<div class="wrapper">
				<div class="list">
					<questionnaries-list/>
		</div>
		<div class="newQuest">
			<questionnaries-add/>
		</div>
	</div>
</template>
<script>
import QuestionnariesList from "./QListPage.vue";
import QuestionnariesAdd from './QAddPage.vue'
export default {
	components:{
		QuestionnariesList,
		QuestionnariesAdd
	}
	
}
</script>