import { useEffect, useState } from 'react'
import './App.css'

type Task = {
  id: number
  title: string
  completed: boolean
}

type Filter = 'all' | 'active' | 'completed'

function App() {
  const [task, setTask] = useState('')

  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('family-planner-tasks')

    if (!savedTasks) {
      return []
    }

    try {
      return JSON.parse(savedTasks) as Task[]
    } catch {
      return []
    }
  })

  const [filter, setFilter] = useState<Filter>('all')

  useEffect(() => {
    localStorage.setItem(
      'family-planner-tasks',
      JSON.stringify(tasks),
    )
  }, [tasks])

  function addTask() {
    const trimmedTask = task.trim()

    if (!trimmedTask) {
      return
    }

    const newTask: Task = {
      id: Date.now(),
      title: trimmedTask,
      completed: false,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
    setTask('')
  }

  function toggleTask(id: number) {
    setTasks((currentTasks) =>
      currentTasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item,
      ),
    )
  }

  function deleteTask(id: number) {
    setTasks((currentTasks) =>
      currentTasks.filter((item) => item.id !== id),
    )
  }

  function clearCompletedTasks() {
    setTasks((currentTasks) =>
      currentTasks.filter((item) => !item.completed),
    )
  }

  const remainingTasksCount = tasks.filter(
    (item) => !item.completed,
  ).length

  const completedTasksCount = tasks.filter(
    (item) => item.completed,
  ).length

  const filteredTasks = tasks.filter((item) => {
    if (filter === 'active') {
      return !item.completed
    }

    if (filter === 'completed') {
      return item.completed
    }

    return true
  })

  function getEmptyMessage() {
    if (filter === 'active') {
      return 'Nemáš žiadne zostávajúce úlohy.'
    }

    if (filter === 'completed') {
      return 'Zatiaľ nemáš žiadne dokončené úlohy.'
    }

    return 'Zatiaľ nemáš žiadne úlohy.'
  }

  return (
    <main className="page">
      <div className="planner-container">
        <section className="hero-card">
          <div className="hero-content">
            <div className="planner-header">
              <span className="planner-icon">🏡</span>

              <div>
                <h1>Family Planner</h1>
                <p>
                  Maj svoje úlohy prehľadne na jednom mieste.
                </p>
              </div>
            </div>

            <div className="stats-grid">
              <article className="stat-card">
                <span className="stat-icon">☷</span>

                <div>
                  <p>Spolu úloh</p>
                  <strong>{tasks.length}</strong>
                </div>
              </article>

              <article className="stat-card">
                <span className="stat-icon yellow">◷</span>

                <div>
                  <p>Zostáva</p>
                  <strong>{remainingTasksCount}</strong>
                </div>
              </article>

              <article className="stat-card">
                <span className="stat-icon">✓</span>

                <div>
                  <p>Dokončené</p>
                  <strong>{completedTasksCount}</strong>
                </div>
              </article>
            </div>
          </div>

          <div className="hero-illustration">
            <div className="sun">☀️</div>
            <div className="house">🏡</div>
          </div>
        </section>

        <section className="form-card">
          <div className="section-heading">
            <span>🌿</span>
            <h2>Nová úloha</h2>
          </div>

          <div className="task-form-row">
            <input
              id="task"
              type="text"
              value={task}
              onChange={(event) =>
                setTask(event.target.value)
              }
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  addTask()
                }
              }}
              placeholder="Napríklad kúpiť mlieko..."
            />

            <button type="button" onClick={addTask}>
              Pridať úlohu
              <span>＋</span>
            </button>
          </div>
        </section>

        <section className="tasks-card">
          <div className="tasks-heading">
            <h2>Moje úlohy</h2>

            <button
              type="button"
              className="clear-button"
              onClick={clearCompletedTasks}
              disabled={completedTasksCount === 0}
            >
              🗑 Vymazať dokončené
            </button>
          </div>

          <div className="filters">
            <button
              type="button"
              className={
                filter === 'all'
                  ? 'filter-button active'
                  : 'filter-button'
              }
              onClick={() => setFilter('all')}
            >
              ☷ Všetky
            </button>

            <button
              type="button"
              className={
                filter === 'active'
                  ? 'filter-button active'
                  : 'filter-button'
              }
              onClick={() => setFilter('active')}
            >
              ◷ Zostávajúce
            </button>

            <button
              type="button"
              className={
                filter === 'completed'
                  ? 'filter-button active'
                  : 'filter-button'
              }
              onClick={() => setFilter('completed')}
            >
              ✓ Dokončené
            </button>
          </div>

          {filteredTasks.length === 0 ? (
            <p className="empty-message">
              {getEmptyMessage()}
            </p>
          ) : (
            <ul className="tasks-list">
              {filteredTasks.map((item) => (
                <li
                  key={item.id}
                  className={
                    item.completed
                      ? 'task-item completed'
                      : 'task-item'
                  }
                >
                  <label className="task-content">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() =>
                        toggleTask(item.id)
                      }
                    />

                    <span>{item.title}</span>
                  </label>

                  <button
                    type="button"
                    className="delete-button"
                    onClick={() =>
                      deleteTask(item.id)
                    }
                    aria-label={`Vymazať úlohu ${item.title}`}
                    title="Vymazať úlohu"
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        <footer className="planner-footer">
          <span>💚</span>
          <p>
            Malé kroky každý deň vedú k veľkým výsledkom.
          </p>
        </footer>
      </div>
    </main>
  )
}

export default App