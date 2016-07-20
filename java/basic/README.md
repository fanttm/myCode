这里的Person.java和caller/MyAge.java主要记录java编译和执行的过程（包含jar包）

编译Person

```bash
javac Person.java
jar cvf person.jar Person.class
```

编译MyAge

```bash
javac -classpath ../person.jar MyAge.java
java -classpath ../ MyAge
```

> + javac编译时，-classpath后带的是jar包（含相对或绝对路径），多个jar包用冒号:分割
> + java执行时，-classpath只能是路径，如果带上jar包会报错
> 