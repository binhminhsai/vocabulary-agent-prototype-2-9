import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import WritingPractice from "@/pages/writing-practice";
import WritingTask1 from "@/pages/writing-task-1";
import WritingTask1Practice from "@/pages/writing-task-1-practice";
import Login from "@/pages/login";
import Blog from "@/pages/blog";
import WordPressDemo from "@/pages/wordpress-demo";
import Wordcraft from "@/pages/wordcraft";
import WordcraftWords from "@/pages/wordcraft-words";
import WordcraftWordDetail from "@/pages/wordcraft-word-detail";
import ProgressTracking from "@/pages/progress-tracking";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-0">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/writing-practice" component={WritingPractice} />
          <Route path="/writing-task-1" component={WritingTask1} />
          <Route path="/writing-task-1/practice" component={WritingTask1Practice} />
          <Route path="/blog" component={Blog} />
          <Route path="/wordpress-demo" component={WordPressDemo} />
          <Route path="/login" component={Login} />
          <Route path="/wordcraft" component={Wordcraft} />
          <Route path="/wordcraft/:cardId/words" component={WordcraftWords} />
          <Route path="/wordcraft/:cardId/words/:wordId/detail" component={WordcraftWordDetail} />
          <Route path="/progress-tracking" component={ProgressTracking} />
          <Route path="/about" component={NotFound} />
          <Route path="/vocabulary" component={NotFound} />
          <Route path="/progress" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
