import CreateForm from '@/components/CreateForm';

export default function Header() {
  return (
    <main>
      <CreateForm locationUpdateHandler={locationUpdateHandler} />
    </main>
  );
}
