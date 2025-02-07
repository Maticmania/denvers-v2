
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import { SubmitButton } from '@/components/form/Buttons';
import { createProfileAction } from '@/utils/actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const page = async () => {
  const user = await currentUser();
  if(user?.privateMetadata?.hasProfile) redirect('/')
  return (
    <section>
        <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
        <div className='border p-8 roundec-md '>
            <FormContainer action={createProfileAction}>
                <div className="grid gap-4 md:grid-cols-2 mt-4">
                <FormInput type='text' label='First Name' name='firstName' />
                <FormInput type='text' label='Last Name' name='lastName' />
                <FormInput type='text' label='username' name='username' />
                </div>
                <SubmitButton text='Create Profile' className='' />
            </FormContainer>
        </div>
    </section>
  )
}

export default page
