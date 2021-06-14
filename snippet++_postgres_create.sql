CREATE TABLE public.sessions (
	"_id" serial NOT NULL,
	"cookie_id" bigint NOT NULL,
	"exp" bigint NOT NULL,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"username" varchar UNIQUE NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE public.user_snippets ( 
	"_id" serial NOT NULL,
	"user_id" bigint NOT NULL,
	"snippet_id" bigint NOT NULL,
	CONSTRAINT "user_snippets_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.snippets ( 
	"_id" serial NOT NULL,
	"url" varchar NOT NULL,
	"code" varchar NOT NULL,
	CONSTRAINT "snippets_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE public.snippet_tags (
	"_id" serial NOT NULL,
	"snippet_id" bigint NOT NULL,
  "tag_name" varchar NOT NULL,
	CONSTRAINT "snippet_tags_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE public.tags (
	"tag_name" varchar UNIQUE NOT NULL,
	CONSTRAINT "tags_pk" PRIMARY KEY ("tag_name")
) WITH (
  OIDS=FALSE
);



ALTER TABLE public.sessions ADD CONSTRAINT "userCookies_fk0" FOREIGN KEY ("cookie_id") REFERENCES public.users("_id");

ALTER TABLE public.user_snippets ADD CONSTRAINT "user_snippets_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");
ALTER TABLE public.user_snippets ADD CONSTRAINT "user_snippets_fk1" FOREIGN KEY  ("snippet_id") REFERENCES public.snippets("_id");

ALTER TABLE public.snippet_tags ADD CONSTRAINT "snippet_tags_fk0" FOREIGN KEY ("snippet_id") REFERENCES public.snippets("_id");
ALTER TABLE public.snippet_tags ADD CONSTRAINT "snippet_tags_fk1" FOREIGN KEY  ("tag_name") REFERENCES public.tags("tag_name");

INSERT INTO public.users VALUES (1, 'keyboardFanatic', 'keyboard');
INSERT INTO public.users VALUES (2, 'frandering', 'siracha123');
INSERT INTO public.users VALUES (3, 'master', 'master');
INSERT INTO public.users VALUES (4, 'bbygorl', 'ian');
INSERT INTO public.users VALUES (5, 'mochi', 'treaties');


INSERT INTO public.snippets VALUES (1, 'https://gist.githubusercontent.com/zzarcon/dae3db4b470cb5140fb5/raw/c0e95a510d2524bc0cee290728bb59cc6c7a5cc3/fibo_loop.js', 'function fibonacci(num){\n  var a = 1, b = 0, temp;\n\n  while (num >= 0){\n    temp = a;\n    a = a + b;\n    b = temp;\n    num--;\n  }\n\n  return b;\n}');
INSERT INTO public.snippets VALUES (2, 'www.shahsapproachlecture.com', 'const fizzbuzzbazz = num => {\n  const output = [];\n  for (let i = 1; i <= num; i++) {\n    let str = '';\n    if (i % 3 === 0) str += ''fizz'';\n    if (i % 5 === 0) str += ''buzz'';\n    if (i % 7 === 0) str += ''bazz'';\n    output.push(str || i);\n  }\n  return output;\n}');
INSERT INTO public.snippets VALUES (3, 'https://neokeys.net/', 'public static boolean geneticAlgorthm()\n    {\n        ArrayList<ArrayList<Integer>>[] currentRankingOfPaths = new ArrayList[adjMatrix.length+1];\n        ArrayList<ArrayList<Integer>> currentPaths = new ArrayList<>();\n        HashSet<String> previousPaths = new HashSet<>();\n        for(int i=1; i<=populationSize; i++)\n        {\n            int[] path = randomNumGenerator();\n            ArrayList<Integer> randomPath = randomNumGeneratorForGenetic();\n            int fitness = calculateFitnessForGenetic(randomPath);\n            currentRankingOfPaths[fitness].add(randomNumGeneratorForGenetic());\n            currentPaths.add(randomNumGeneratorForGenetic());\n        }\n\n        for(int i=0; i<iterationSize; i ++)\n        {\n            ArrayList<ArrayList<Integer>>[] tempRankingOfPaths = new ArrayList[adjMatrix.length+1];\n            ArrayList<ArrayList<Integer>>[] nextRankingOfPaths = new ArrayList[adjMatrix.length+1];\n            ArrayList<ArrayList<Integer>> nextPaths = new ArrayList<>();\n\n            for(ArrayList<Integer> parent1 : currentPaths)\n            {\n                for(int j=1; j<currentPaths.size(); j++)\n                {\n                    ArrayList<Integer> child = new ArrayList<>();\n                    for(int integer : parent1)\n                    {\n                        child.add(integer);\n                    }\n                    ArrayList<Integer> parent2 = currentPaths.get(j);\n\n                    /** Crossover */\n                    int randomSplit = (int)(Math.random()*adjMatrix.length); //0 to totalVertices choice\n                    for(int removeNum = randomSplit; removeNum<adjMatrix.length; removeNum++)\n                    {\n                        child.remove(parent2.get(removeNum));\n                    }\n                    for(int addNum = randomSplit; addNum<adjMatrix.length; addNum++)\n                    {\n                        child.add(parent2.get(addNum));\n                    }\n\n                    /** Mutation chance of 20% */\n                    int mutationChance = (int)(Math.random()*9) + 1;\n                    if(mutationChance == 2 || mutationChance == 3)\n                    {\n                        int a = (int)(Math.random()*adjMatrix.length);\n                        int b;\n                        do\n                        {\n                            b = (int) (Math.random() * adjMatrix.length);\n                        } while(a == b);\n\n                        Integer temp = child.get(a);\n                        child.set(a, child.get(b));\n                        child.set(b, temp);\n                    }\n                    int fitness = calculateFitnessForGenetic(child);\n                    tempRankingOfPaths[fitness].add(child);\n                }\n            }\n            /** Adding back for next generation\n             *  altering between children and parents\n             *  determined by descending ranking order*/\n            int topRank = adjMatrix.length;\n            for(int rank = topRank; rank>=0 && nextPaths.size()!=populationSize; rank--)\n            {\n                while(!tempRankingOfPaths[rank].isEmpty() && nextPaths.size()!=populationSize)\n                {\n                    ArrayList<Integer> temp = tempRankingOfPaths[rank].remove(0);\n                    nextRankingOfPaths[rank].add(temp);\n                    nextPaths.add(temp);\n                }\n                while(!currentRankingOfPaths[rank].isEmpty() && nextPaths.size()!=populationSize)\n                {\n                    ArrayList<Integer> temp = currentRankingOfPaths[rank].remove(0);\n                    nextRankingOfPaths[rank].add(temp);\n                    nextPaths.add(temp);\n                }\n            }\n            currentRankingOfPaths = nextRankingOfPaths;\n            currentPaths = nextPaths;\n\n            /** Found a maximum fitness */\n            if(!currentRankingOfPaths[topRank].isEmpty())\n            {\n                recentBestGeneticFitness = currentRankingOfPaths[topRank].get(0);\n                geneticForceMaximumFitness = topRank;\n                currentGenerationIteration = i;\n                return true;\n            }\n        }\n\n        /** Didn '' t get maximum fitness */\n        for(int i=adjMatrix.length; i>=0; i--)\n        {\n            if(!currentRankingOfPaths[i].isEmpty())\n            {\n                recentBestGeneticFitness = currentRankingOfPaths[i].get(0);\n                geneticForceMaximumFitness = i;\n            }\n        }\n        currentGenerationIteration = iterationSize;\n        return false;\n    }');
INSERT INTO public.snippets VALUES (4, 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse', 'const reverseArray = array => {\n  let count = (array.length / 2);\n  for (let i = 0; i < count; i++) {\n    const ele1 = array[i];\n    array[i] = array[array.length - 1 - i];\n    array[array.length - 1 - i] = ele1;\n  }\n  return array;\n};');
INSERT INTO public.snippets VALUES (5, 'https://dev.to/alisabaj/finding-the-middle-of-a-linked-list-36kp', 'function middleNode(head) {\n  let fast = head;\n  let slow = head;\n\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  return slow;\n}');


INSERT INTO public.tags VALUES ('algo');
INSERT INTO public.tags VALUES ('reverse');
INSERT INTO public.tags VALUES ('algorithm');
INSERT INTO public.tags VALUES ('java');
INSERT INTO public.tags VALUES ('fizz');
INSERT INTO public.tags VALUES ('buzz');
INSERT INTO public.tags VALUES ('bazz');
INSERT INTO public.tags VALUES ('fibonacci');
INSERT INTO public.tags VALUES ('genetic');
INSERT INTO public.tags VALUES ('linked_list');
INSERT INTO public.tags VALUES ('node');



INSERT INTO public.user_snippets VALUES (1, 1, 4);
INSERT INTO public.user_snippets VALUES (2, 2, 1);
INSERT INTO public.user_snippets VALUES (3, 3, 3);
INSERT INTO public.user_snippets VALUES (4, 4, 2);
INSERT INTO public.user_snippets VALUES (5, 5, 5);


INSERT INTO public.snippet_tags VALUES (1, 1, 'algo');
INSERT INTO public.snippet_tags VALUES (2, 1, 'reverse');
INSERT INTO public.snippet_tags VALUES (3, 2, 'fizz');
INSERT INTO public.snippet_tags VALUES (4, 2, 'buzz');
INSERT INTO public.snippet_tags VALUES (5, 2, 'bazz');
INSERT INTO public.snippet_tags VALUES (6, 3, 'algorithm');
INSERT INTO public.snippet_tags VALUES (7, 3, 'java');
INSERT INTO public.snippet_tags VALUES (8, 3, 'genetic');
INSERT INTO public.snippet_tags VALUES (9, 4, 'reverse');
INSERT INTO public.snippet_tags VALUES (10, 5, 'linked_list');
INSERT INTO public.snippet_tags VALUES (11, 5, 'node');



select setval('public.users__id_seq', 6, true);
select setval('public.snippets__id_seq', 5, true);
select setval('public.user_snippets__id_seq', 5, true);
select setval('public.snippet_tags__id_seq', 11, true);


INSERT INTO public.snippets(url, code) VALUES ('https://www.google.com', 'const flatten = arr => {\n  return arr.reduce((acc, curr) => {\n    if (Array.isArray(curr)) acc = acc.concat(flatten(curr));\n    else acc.push(curr);\n    return acc;\n  }, [])\n}');

INSERT INTO public.user_snippets(user_id, snippet_id) VALUES (4, 6);

INSERT INTO public.tags VALUES ('flatten');
INSERT INTO public.tags VALUES ('reduce');

INSERT INTO public.snippet_tags(snippet_id, tag_name) VALUES (6, 'flatten');
INSERT INTO public.snippet_tags(snippet_id, tag_name) VALUES (6, 'reduce');
INSERT INTO public.snippet_tags(snippet_id, tag_name) VALUES (6, 'algo');



