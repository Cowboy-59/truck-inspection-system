import { Router, Route, Switch } from 'wouter'
import { Truck } from 'lucide-react'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">
                Truck Inspection System
              </h1>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/inspections" component={InspectionsPage} />
            <Route>
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-muted-foreground">
                  The page you're looking for doesn't exist.
                </p>
              </div>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

function HomePage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Welcome to Truck Inspection System
        </h2>
        <p className="text-muted-foreground mt-2">
          Comprehensive truck inspection management for web and mobile platforms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 space-y-2">
          <h3 className="text-lg font-semibold">Web Interface</h3>
          <p className="text-sm text-muted-foreground">
            View, print, and distribute inspection results through a modern web interface
          </p>
        </div>

        <div className="border rounded-lg p-6 space-y-2">
          <h3 className="text-lg font-semibold">Mobile App</h3>
          <p className="text-sm text-muted-foreground">
            Conduct inspections directly at truck locations with offline capabilities
          </p>
        </div>

        <div className="border rounded-lg p-6 space-y-2">
          <h3 className="text-lg font-semibold">REST API</h3>
          <p className="text-sm text-muted-foreground">
            Central data controller managing all inspection data and operations
          </p>
        </div>
      </div>

      <div className="bg-muted rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">System Status</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Frontend</span>
            <span className="text-green-600 font-medium">✓ Ready</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Backend API</span>
            <span className="text-yellow-600 font-medium">⚠ Pending Setup</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Database</span>
            <span className="text-yellow-600 font-medium">⚠ Pending Connection</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function InspectionsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Inspections</h2>
      <div className="border rounded-lg p-8 text-center">
        <p className="text-muted-foreground">
          Inspection management interface will be implemented in future tasks
        </p>
      </div>
    </div>
  )
}

export default App