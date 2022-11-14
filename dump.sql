--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: pokemon; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.pokemon (
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    weight integer NOT NULL,
    "typeId" integer NOT NULL
);


--
-- Name: pokemon_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.pokemon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pokemon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.pokemon_id_seq OWNED BY public.pokemon.id;


--
-- Name: types; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.types (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


--
-- Name: types_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.types_id_seq OWNED BY public.types.id;


--
-- Name: pokemon id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pokemon ALTER COLUMN id SET DEFAULT nextval('public.pokemon_id_seq'::regclass);


--
-- Name: types id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.types ALTER COLUMN id SET DEFAULT nextval('public.types_id_seq'::regclass);


--
-- Data for Name: pokemon; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.pokemon VALUES (6, 'empoleon', 98, 2);
INSERT INTO public.pokemon VALUES (7, 'squirtle', 20, 2);
INSERT INTO public.pokemon VALUES (8, 'blastoise', 92, 2);
INSERT INTO public.pokemon VALUES (15, 'torchic', 10, 1);
INSERT INTO public.pokemon VALUES (16, 'blaziken', 80, 1);
INSERT INTO public.pokemon VALUES (17, 'mantine', 102, 2);
INSERT INTO public.pokemon VALUES (18, 'mantyke', 12, 2);
INSERT INTO public.pokemon VALUES (14, 'horsea', 8, 2);


--
-- Data for Name: types; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.types VALUES (1, 'fogo');
INSERT INTO public.types VALUES (2, 'água');
INSERT INTO public.types VALUES (3, 'grama');


--
-- Name: pokemon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.pokemon_id_seq', 18, true);


--
-- Name: types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.types_id_seq', 4, true);


--
-- Name: pokemon pokemon_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT pokemon_name_key UNIQUE (name);


--
-- Name: pokemon pokemon_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT pokemon_pk PRIMARY KEY (id);


--
-- Name: types types_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pk PRIMARY KEY (id);


--
-- Name: pokemon pokemon_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT pokemon_fk0 FOREIGN KEY ("typeId") REFERENCES public.types(id);


--
-- PostgreSQL database dump complete
--

