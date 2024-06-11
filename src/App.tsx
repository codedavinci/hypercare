import { useEffect, useState } from "react";
import type { User } from "./types";

import UserCard from "./components/UserCard";
import UserDetails from "./components/UserDetails";

import { Button, Skeleton, Layout, Modal } from "./components/common";

import UserAPI, { UserMap } from "./api/user";
import { delay } from "./utils";

import "./output.css";

const TOTAL_ELEMENTS_PER_LOAD = 20 as const;
const TWO_SECONDS = 2000;

const _userAPI = new UserAPI();

function App() {
  const [users, setUsers] = useState<UserMap>({});
  const [displayedCards, setDisplayedCards] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User>();

  useEffect(() => {
    setLoading(true);
    async function exec() {
      await delay(TWO_SECONDS);
      const users = await _userAPI.getUsers();

      setUsers(users);
      setDisplayedCards(Object.values(users).slice(0, TOTAL_ELEMENTS_PER_LOAD));
      setLoading(false);
    }
    exec();
  }, []);

  async function loadMore() {
    setLoading(true);
    await delay(TWO_SECONDS);
    setDisplayedCards((currentCards) => [
      ...currentCards,
      ...Object.values(users).slice(
        currentCards.length,
        currentCards.length + TOTAL_ELEMENTS_PER_LOAD
      ),
    ]);
    setLoading(false);
  }

  function viewUserDetails(userId: string) {
    setIsModalOpen(true);
    setSelectedUser(users[userId]);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Layout>
      {displayedCards.map((user) => {
        return (
          <UserCard key={user.id} {...user} onViewMore={viewUserDetails} />
        );
      })}
      {loading &&
        Array.from({ length: TOTAL_ELEMENTS_PER_LOAD }).map((_, i) => {
          return <Skeleton key={i} />;
        })}
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4  text-center">
        <Button
          data-theme="night"
          variant="secondary"
          onClick={loadMore}
          id="load-more"
        >
          Load More
        </Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <UserDetails user={selectedUser!} />
      </Modal>
    </Layout>
  );
}

export default App;
