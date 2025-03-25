"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import FormField from "./form-field";
import { useRouter } from "next/navigation";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        toast.success("Cadastro realizado com sucesso, faça o login");
        router.push("/entrar");
      } else {
        toast.success("Login realizado com sucesso");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao fazer login, tente novamente");
    }
  }

  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src={"/logo.svg"} alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">Updin</h2>
        </div>

        <h3>Pratique entrevistas tecnicas de emprego com AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 mt-4 w-full form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Nome"
                placeholder="Seu nome"
              />
            )}
            <FormField
                control={form.control}
                name="email"
                label="E-mail"
                placeholder="Seu E-mail"
              />
            
            
            <FormField
                control={form.control}
                name="password"
                label="Senha"
                placeholder="Sua senha"
                type="password"
              />

            <Button className="btn" type="submit">
              {isSignIn ? "Entrar" : "Cadastrar"}
            </Button>
          </form>
        </Form>

        <p className="text-center">
          {isSignIn ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
          <Link
            href={isSignIn ? "/cadastrar" : "/entrar"}
            className="font-bold text-user-primary ml-1"
          >
            {isSignIn ? "Cadastre-se" : "Entre"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
