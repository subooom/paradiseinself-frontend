<template>
    <div class="create-project-form">
        <div class="left-container">
            <LogoBar color="#261e56" fontSize="25px"></LogoBar>
            <p class="page-title">create a project</p>

        </div>
        <form @submit="handleCreateProjectFormSubmit" style=" margin: 1rem 0; min-width: 645px;display: grid;grid-template-columns: 1fr 1fr; align-items: end;">
            <ParaInputBox
                @change="handleProjectTitleChanged"
                title="Project Title"
                :errorMsg=errors.title
                iconName="fa-asterisk icon-right"
                accent="#261e56"
                textAlign="left"></ParaInputBox>
            <ParaTextArea title="Description"
                @change="handleDescriptionChanged"
                :errorMsg=errors.description
                iconName="fa-info icon-right"
                accent="#261e56"
                textAlign="left"></ParaTextArea>


            <div class="form-group">
                <div class="label-container">
                    <label class="left-side">Start Date</label>
                    <span class="right-side today-check-box-container" @click="handleTodayClicked">
                        <input @click="handleTodayClicked" ref="todayCheckBox" class="today-check-box" type='checkbox'>
                        <label>Today</label>
                    </span>
                </div>
                <ParaDatePicker
                    @dateChanged="handleStartDateChanged"
                    ref="startDateInput"
                    :value=startDate
                    iconName="fa-calendar-alt icon-right"
                    accent="#261e56"
                    textAlign="left"></ParaDatePicker>
                </div>
                <div class="form-group">
                    <div class="label-container">
                        <label class="left-side">End Date</label>
                        <span class="right-side end-date-deadline-container">
                            <ParaInputBox title="Deadline"
                            style="width: 150px;"
                                type="number"
                                :errorMsg=errors.deadline
                                @change="handleDeadlineChanged"
                                iconName="fa-hashtag icon-right"
                                variant="small"
                                accent="#261e56"
                                textAlign="left">
                            </ParaInputBox>
                            <label> days</label>

                        </span>
                    </div>
                    <ParaDatePicker
                        @dateChanged="handleEndDateChanged"
                        ref="endDateInput"
                        :value=endDate
                        iconName="fa-calendar icon-right"
                        accent="#261e56"
                        textAlign="left"></ParaDatePicker>
                </div>
                <ParaInputBox title="Budget"
                    :errorMsg=errors.budget
                    @change="handleBudgetChanged"
                    iconName="fa-credit-card icon-right"
                    type="number"
                    accent="#261e56"
                    textAlign="left"></ParaInputBox>
                <ParaInputBox title="Budget Currency"
                    @change="handleBudgetCurrencyChanged"
                    iconName="fa-dollar-sign icon-right"
                    :errorMsg=errors.budget_currency
                    accent="#261e56"
                    textAlign="left"></ParaInputBox>
                <div class="form-group" style="margin-right: 1rem">
                    <label>Project Type</label>
                    <ParaSelect @paraSelectOnChange="handleProjectTypeChange"
                    :options=projectTypes></ParaSelect>
                </div>
                <div class="form-group" style="margin-right: 1rem">
                    <ParaButton title="+ Create Project"
                        style="border: none;
                        padding: 13px 26px;
                        width: 100%;
                        margin-top: 25px;
                        border-radius: 25px;
                        text-align: center;
                        font-weight: 500;"
                        btnType="primary" class="add-expense-button" ></ParaButton>
            </div>
        </form>

    </div>
</template>

<script>

import ParaInputBox from '../../../../components/ParaInputBox.vue';
import ParaTextArea from '../../../../components/ParaTextArea.vue';
import ParaDatePicker from '../../../../components/ParaDatePicker.vue';
import ParaButton from '../../../../components/ParaButton.vue';
import ParaSelect from '../../../../components/ParaSelect.vue';
import LogoBar from './LogoBar.vue';
import validators from '../../validators';
import gql from 'graphql-tag'

export default {
  name: 'CreateProjectForm',
  mounted() {
    Date.prototype.addDays = (days) => {
      var date = new Date(this.startDate);
      date.setDate(parseInt(date.getDate()) + parseInt(days));
      return date;
    }
  },
  props: {
    projectTypes: {
        type: Array,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
  },
  data() {
    return {
      title: '',
      description: '',
      startDate: '',
      deadline: '',
      endDate: '',
      project_type_id: 1,
      budget: '',
      budget_currency: '',
      errors: {
        title: null,
        description: null,
        deadline: null,
        budget: null,
        budget_currency: null,
      }
    };
  },
  components: {
    ParaInputBox,
    ParaTextArea,
    ParaDatePicker,
    ParaButton,
    ParaSelect,
    LogoBar,
  },
  methods: {
    handleProjectTitleChanged(val)
    {
        // get the validator

        let validator = validators.username(val);

        this.setError(validator, 'title');

    },
    handleDescriptionChanged(val)
    {
        let validator = validators.text(val);

        this.setError(validator, 'description');

        console.log(validator)
    },
    handleBudgetChanged(val)
    {
        let validator = validators.number(val);

        this.setError(validator, 'budget');
    },
    handleBudgetCurrencyChanged(val)
    {
        let validator = validators.string(val);

        this.setError(validator, 'budget_currency');
    },
    setError(validator, property)
    {
        // check if the validator has error

        if (validator.hasError)
        {
            this.errors[property] = validator.message
        } else {

            this.errors[property] = null
        }

    },
    validate() {

    },
    string_to_slug (str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    },
    handleCreateProjectFormSubmit(e)
    {
        e.preventDefault();


        // We save the user input in case of an error
        const title = this.title
        const slug = this.string_to_slug(this.title)
        const description = this.description
        const startDate = this.startDate
        const deadline = this.deadline
        const endDate = this.endDate
        const project_type_id = this.project_type_id
        const budget = this.budget
        const budget_currency = this.budget_currency
        const created_by = this.createdBy

        // We clear it early to give the UI a snappy feel
        this.title = ''
        this.description = ''
        this.startDate = ''
        this.deadline = ''
        this.endDate = ''
        this.project_type_id = ''
        this.budget = ''
        this.budget_currency = ''

        // Call to the graphql mutation
        this.$apollo.mutate({
        // Query
        mutation: gql`mutation(
            $title: String!,
            $slug: String!,
            $description: String!,
            $startDate: String!,
            $endDate: String!,
            $budget: String!,
            $budget_currency: String!,
            $project_type_id: ID!,
            $created_by: ID!
        ) {
            createProject(
                input: {
                    title: $title,
                    slug: $slug,
                    description: $description,
                    start_date: $startDate,
                    end_date: $endDate,
                    budget: $budget,
                    budget_currency: $budget_currency,
                    project_type_id: $project_type_id,
                    created_by: $created_by,
                }
            ) {
                id
                creator {
                    name
                }
            }
        }`,
         // Parameters
        variables: {
            title: title,
            slug: slug,
            description: description,
            start_date: startDate,
            end_date: endDate,
            budget: budget,
            budget_currency: budget_currency,
            project_type_id: project_type_id,
            created_by: created_by,
        },
        // Update the cache with the result
        // The query will be updated with the optimistic response
        // and then with the real result of the mutation
        // update: (store, { data: { addTag } }) => {
        //     // Read the data from our cache for this query.
        //     const data = store.readQuery({ query: TAGS_QUERY })
        //     // Add our tag from the mutation to the end
        //     data.tags.push(addTag)
        //     // Write our data back to the cache.
        //     store.writeQuery({ query: TAGS_QUERY, data })
        // },
        // Optimistic UI
        // Will be treated as a 'fake' result as soon as the request is made
        // so that the UI can react quickly and the user be happy
        // optimisticResponse: {
        //     __typename: 'Mutation',
        //     addTag: {
        //     __typename: 'Tag',
        //     id: -1,
        //     label: newTag,
        //     },
        // },
        }).then((data) => {
        // Result
        console.log(data)
        }).catch((error) => {
        // Error
        console.error(error)
        // We restore the initial user input
        // this.newTag = newTag
        })
    },
    handleEndDateChanged(value)
    {
        this.endDate = value;
    },
    handleStartDateChanged(value)
    {
        this.startDate = value;
    },
    handleDeadlineChanged(val)
    {
        const startDate = new Date(this.startDate)

        const endDate = startDate.addDays(val);

        let validator = validators.number(val);

        this.setError(validator, 'deadline');

        this.endDate = this.getDateString(endDate);
    },
    handleProjectTypeChange(e)
    {
        this.project_type_id = e.target.value;
    },
    handleTodayClicked(e)
    {
        this.$refs.todayCheckBox.checked = !this.$refs.todayCheckBox.checked;


        if (this.$refs.todayCheckBox.checked)
        {
            var today = new Date();

            this.startDate = this.getDateString(today);
            console.log(this.startDate);
        } else {
            this.startDate = null;
        }
    },
    getDateString(date)
    {
        return date.getFullYear() + '-' +
            ('0' + (date.getMonth()+1)).slice(-2) + '-' +
            ('0' + date.getDate()).slice(-2);
    },
  }
}
</script>

<style lang="stylus" scoped>
  .create-project-form
    background: white
    height 100vh
  label
    margin 0;

  .form-group
    margin-right: 1rem;

  .label-container
    display flex
    align-items center
    margin-bottom: 0.5rem;

  .label-container .left-side
    justify-self: flex-start

  .label-container .right-side
    margin-left 100px
    justify-self: flex-end

  .end-date-deadline-container
    display: flex;
    align-items: center;

  .today-check-box-container,
  .today-check-box-container input,
  .today-check-box-container label
    cursor pointer

  .today-check-box-container label
    padding-right 10px

  .today-check-box-container input
    padding-left 10px

  .today-check-box
    margin-right 5px

  .create-project-form
    display flex
    align-items center
    justify-content space-around
    grid-column 1/3

.left-container
  display: flex
  flex-direction column
  align-items: center
  justify-content: space-evenly
  height: 222px;

.page-title
  font-size: 20px
  color: #261E56


</style>
