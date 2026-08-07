export function QuickActions({ actions }: { actions: string[] }) {
  return (
    <section className="panel panel-actions">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Actions</p>
          <h2>Quick banking</h2>
        </div>
      </div>
      <div className="action-grid">
        {actions.map((action) => (
          <button key={action} className="quick-action">
            {action}
          </button>
        ))}
      </div>
    </section>
  );
}
