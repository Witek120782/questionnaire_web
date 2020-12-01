<template>
	<div class="wrapper">questionnaires main page2
				<div class="list">
					tutaj
					<questionnaries-list/>
		</div>
		<div class="newQuest">
			tam
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