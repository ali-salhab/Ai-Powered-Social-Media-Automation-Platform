import {
  ActivityIcon,
  CircleCheckIcon,
  ClockIcon,
  SendIcon,
  Share2Icon,
  TrendingUpIcon,
} from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";
import {
  dummyAccountsData,
  dummyActivityData,
  dummyGenerationData,
  dummyPostsData,
} from "../assets/assets";
/**
 * Renders the dashboard page.
 */
function Dashboard() {
  const [states, setstats] = useState({
    scheduled: 0,
    published: 0,
    connectedAccounts: 0,
  });
  const [activites, setActivites] = useState<any[]>([]);
  const stateCards = [
    {
      label: "Scheduled Posts",
      value: states.scheduled,
      icon: ClockIcon,
      trend: "+2 today",
    },
    {
      label: "Published Posts",
      value: states.published,
      icon: CircleCheckIcon,
      trend: "All Time",
    },
    {
      label: "connected Accounts",
      value: states.connectedAccounts,
      icon: Share2Icon,
      trend: "today",
    },
  ];
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [postRes, accountRes, activityRes] = [
          { data: dummyPostsData },
          { data: dummyAccountsData },
          { data: dummyActivityData },
        ];
        const posts = postRes.data;
        setstats({
          scheduled: posts.filter((p: any) => p.status === "scheduled").length,
          published: posts.filter((p: any) => p.status === "published").length,
          connectedAccounts: accountRes.data.filter(
            (a: any) => a.status === "connected",
          ).length,
        });
        setActivites(activityRes.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchDashboardData();
  }, []);
  return (
    <div className="space-y-8">
      <div>
        {/* we create gragient backgroung color then make text transparent using bg-clip-text after that only the gradient color will be visible inside the text letters using bg-clip-text */}
        <h2 className="text-2xl inline bg-clip-text text-extrabold text-transparent  bg-gradient-to-t from-green-900 to-black-900">
          Good Morning
        </h2>
        <p className="text-lg text-slate-600">
          Here is what is happens with ypur social medial accounts today{" "}
        </p>
      </div>

      {/* state cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-hidden">
        {stateCards.map((card) => {
          return (
            <div
              key={card.label}
              className="bg-white p-2 hover:bg-red-50 relative border border-slate-200 rounded-2xl hover:border-red-300 transition-all"
            >
              <div className="flex  items-center justify-between mb-4">
                <div className="text-3xl font-medium text-slate-800">
                  {card.value}
                </div>
                <div className="absolute top-4 right-4 px-2  rounded-lg text-green-500 flex items-center gap-1">
                  <TrendingUpIcon className="size-3" />
                  {card.trend}
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-1">{card.label}</p>
            </div>
          );
        })}
      </div>

      {/* activity feed */}

      <div className="bg-white rounded-2xl border-slate-200 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800">
            Recent Activity
          </h3>
          <span
            className={`text-sm ${activites.length > 0 ? "text-green-500" : "text-red-500"} `}
          >
            {activites.length} events
          </span>
        </div>

        {activites.length === 0 ? (
          <div className="flex flex-col p-12 text-center items-center justify-center text-slate-500">
            <div className="size-12 bg-slate-100 rounded-xl flex items-center justify-center mb-3">
              <ActivityIcon className="size-6 text-slate-400 self-center" />
            </div>
            <p className="text-slate-500">No recent activity to show.</p>
            <p className="text-slate-400 text-sm mt-1">
              Connect accounts and schedule posts to see events here{" "}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-300">
            {activites.map((activity) => {
              return (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 px-6 py-4 hover:bg-slate-50 duration-800 transition-all"
                >
                  <div className="size-10 rounded-xl flex items-center justify-center shrink-0 p-2 mt-0.5 bg-zinc-100 ">
                    <SendIcon className="size-8 text-slate-400 hover:text-blue-500 transition-all ease-in-out duration-800 cursor-pointer hover:scale-150" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-200 text-zinc-600">
                        published
                      </span>
                      <span>
                        {new Date(activity.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-slate-700 text-sm">
                      {activity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
