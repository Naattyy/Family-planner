# Test Cases

## Family Planner

---

## TC_01 – Add a new task using the button

| Field | Description |
|:------|:------------|
| Test Case ID | TC_01 |
| Test Title | Add a new task using the Add Task button |
| Test Data | Task name: Kúpiť banány |
| Precondition | The application is opened and no tasks are stored |
| Expected Result | The new task is displayed in the task list and the task counter is updated |

### Test Steps

1. Open the Family Planner application.
2. Enter `Kúpiť banány` into the task input field.
3. Click the **Pridať úlohu** button.
4. Verify that the task is displayed in the task list.
5. Verify that the input field is cleared.
6. Verify that the total and remaining task counters display `1`.

---

## TC_02 – Add a new task using Enter

| Field | Description |
|:------|:------------|
| Test Case ID | TC_02 |
| Test Title | Add a new task by pressing Enter |
| Test Data | Task name: Upratať kuchyňu |
| Precondition | The application is opened and no tasks are stored |
| Expected Result | The new task is displayed after pressing Enter |

### Test Steps

1. Open the Family Planner application.
2. Enter `Upratať kuchyňu` into the task input field.
3. Press the **Enter** key.
4. Verify that the task is displayed in the task list.
5. Verify that the input field is cleared.

---

## TC_03 – Prevent adding an empty task

| Field | Description |
|:------|:------------|
| Test Case ID | TC_03 |
| Test Title | Attempt to add an empty task |
| Test Data | Empty input |
| Precondition | The application is opened |
| Expected Result | No new task is created |

### Test Steps

1. Open the Family Planner application.
2. Leave the task input field empty.
3. Click the **Pridať úlohu** button.
4. Verify that no task is added.
5. Verify that the message `Zatiaľ nemáš žiadne úlohy.` remains visible.

---

## TC_04 – Clear the input field after adding a task

| Field | Description |
|:------|:------------|
| Test Case ID | TC_04 |
| Test Title | Clear the input field after adding a task |
| Test Data | Task name: Vyniesť smeti |
| Precondition | The application is opened and no tasks are stored |
| Expected Result | The task is added successfully and the input field is cleared |

### Test Steps

1. Open the Family Planner application.
2. Enter **"Vyniesť smeti"** into the task input field.
3. Click the **Pridať úlohu** button.
4. Verify that the task **"Vyniesť smeti"** is displayed in the task list.
5. Verify that the task input field is empty.

## TC_05 – Complete a task

| Field | Description |
|:------|:------------|
| Test Case ID | TC_04 |
| Test Title | Mark a task as completed |
| Test Data | Task name: Poliať kvety |
| Precondition | At least one active task exists |
| Expected Result | The task is marked as completed and the counters are updated |

### Test Steps

1. Open the Family Planner application.
2. Add the task `Poliať kvety`.
3. Select the checkbox next to the task.
4. Verify that the task is visually marked as completed.
5. Verify that the completed task counter displays `1`.
6. Verify that the remaining task counter displays `0`.

---

## TC_06 – Delete a task

| Field | Description |
|:------|:------------|
| Test Case ID | TC_05 |
| Test Title | Delete an existing task |
| Test Data | Task name: Kúpiť chlieb |
| Precondition | The task `Kúpiť chlieb` exists |
| Expected Result | The task is removed from the task list |

### Test Steps

1. Open the Family Planner application.
2. Add the task `Kúpiť chlieb`.
3. Click the delete button next to the task.
4. Verify that the task is no longer displayed.
5. Verify that the total task counter displays `0`.

---

## TC_07 – Display all tasks using the All filter

| Field | Description |
|:------|:------------|
| Test Case ID | TC_07 |
| Test Title | Display all tasks using the All filter |
| Test Data | Active task: Aktívna úloha<br>Completed task: Dokončená úloha |
| Precondition | One active task and one completed task exist |
| Expected Result | Both active and completed tasks are displayed |

### Test Steps

1. Open the Family Planner application.
2. Add the task **"Aktívna úloha"**.
3. Add the task **"Dokončená úloha"**.
4. Mark **"Dokončená úloha"** as completed.
5. Click the **"Všetky"** filter.
6. Verify that both tasks are displayed.

---

## TC_08 – Display only active tasks using the Remaining filter

| Field | Description |
|:------|:------------|
| Test Case ID | TC_08 |
| Test Title | Display only active tasks using the Remaining filter |
| Test Data | Active task: Aktívna úloha<br>Completed task: Dokončená úloha |
| Precondition | One active task and one completed task exist |
| Expected Result | Only the active task is displayed |

### Test Steps

1. Open the Family Planner application.
2. Add the task **"Aktívna úloha"**.
3. Add the task **"Dokončená úloha"**.
4. Mark **"Dokončená úloha"** as completed.
5. Click the **"Zostávajúce"** filter.
6. Verify that **"Aktívna úloha"** is displayed.
7. Verify that **"Dokončená úloha"** is not displayed.

---

## TC_09 – Display only completed tasks using the Completed filter

| Field | Description |
|:------|:------------|
| Test Case ID | TC_09 |
| Test Title | Display only completed tasks using the Completed filter |
| Test Data | Active task: Aktívna úloha<br>Completed task: Dokončená úloha |
| Precondition | One active task and one completed task exist |
| Expected Result | Only the completed task is displayed |

### Test Steps

1. Open the Family Planner application.
2. Add the task **"Aktívna úloha"**.
3. Add the task **"Dokončená úloha"**.
4. Mark **"Dokončená úloha"** as completed.
5. Click the **"Dokončené"** filter.
6. Verify that **"Dokončená úloha"** is displayed.
7. Verify that **"Aktívna úloha"** is not displayed.

---

