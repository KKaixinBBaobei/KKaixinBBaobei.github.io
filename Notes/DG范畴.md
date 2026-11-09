# DG范畴

本文中, 固定一个交换幺环 $\Bbbk$, 将 $\otimes_\Bbbk$ 简记为 $\otimes$. 

预定义命令: $\newcommand\op[1]{\mathop{\mathrm{#1}}\nolimits} \def\Hom{\op{Hom}} \def\scHom{\op{\mathscr{H}\!om}} \def\RHom{\op{\mathbf{R}\mathscr{H}\!om}} \def\Cone{\op{Cone}} \def\Tw{\op{Tw}} \def\id{\op{id}}$

### 预备

#### 分次范畴

- 一个 **[分次范畴]** 是一个 $\Bbbk$-线性范畴 $\mathcal{A}$, 使得

  - 每个态射空间 $\mathcal{A}(A,B)$ 都是 $\mathbb{Z}$-分次 $\Bbbk$-模, 
  - 复合 $\circ:\mathcal{A}(B,C)\otimes\mathcal{A}(A,B)\to\mathcal{A}(A,C), g\otimes f\mapsto g\circ f$ 保持分次.

- 一个 **[分次函子]** $F:\mathcal{A}\to\mathcal{B}$ 是一个 $\Bbbk$-线性函子, 使得 $F(A,B):\mathcal{A}(A,B)\to\mathcal{B}(FA,FB)$ 都是 $0$ 次映射, $\forall A,B\in\mathcal{A}$.

- 一个 **[$p$ 次自然变换]** $\gamma:F\to G$ 是 $\mathcal{B}$ 中的一族 $p$ 次态射 $\gamma_A:FA\to GA$, 使得对 $\mathcal{A}$ 中的任意态射 $f:A\to B$, 均有 $G(f)\circ\gamma_A=(-1)^{|\gamma||f|}\gamma_B\circ F(f)$.

- 分次范畴 $\mathcal{A}$ 的 **[反范畴]** $\mathcal{A}^{\mathrm{op}}$ 是如下的分次范畴:

  - 对象: 和 $\mathcal{A}$ 一样;
  - 态射: $\mathcal{A}^{\mathrm{op}}(A,B)=\mathcal{A}(B,A)$;
  - 复合: $\circ^{\mathrm{op}}:\mathcal{A}^{\mathrm{op}}(B,C)\otimes\mathcal{A}^{\mathrm{op}}(A,B)\to\mathcal{A}^{\mathrm{op}}(A,C)$ 定义为 $g\circ^{\mathrm{op}}f=(-1)^{|f||g|}f\circ g$.

  显然 $(\mathcal{A}^{\mathrm{op}})^{\mathrm{op}}=\mathcal{A}$.

- 两个分次范畴 $\mathcal{A,B}$ 的 **[张量积]** $\mathcal{A\otimes B}$ 是如下的分次范畴:

  - 对象: 二元组 $(A,B)$, 其中 $A\in\mathcal{A}$, $B\in\mathcal{B}$.
  - 态射: 二元组 $f\otimes g:(A,B)\to(A',B')$, 其中 $f:A\to A'$, $g:B\to B'$. 约定 $|f\otimes g|=|f|+|g|$. 所以态射空间同构于分次空间的张量积 $(\mathcal{A\otimes B})((A,B),(A',B'))\cong\mathcal{A}(A,A')\otimes\mathcal{B}(B,B')$.
  - 复合: $(f'\otimes g')\circ(f\otimes g)=(-1)^{|g'||f|}(f'\circ f)\otimes(g'\circ g)$.

- 例: 分次 $\Bbbk$-模范畴 $\mathcal{G}(\Bbbk)$ 是一个分次范畴, 其中

  - 对象: $\mathbb{Z}$-分次 $\Bbbk$-模;
  - 态射: 分次 $\Bbbk$-模同态.
  - 复合: 通常意义下的的复合.
  
- 例: 给定两个分次范畴 $\mathcal{A},\mathcal{B}$. 我们有 **[函子分次范畴]** $\op{Fun}_{gr}(\mathcal{A},\mathcal{B})$, 其中

  - 对象: 分次函子 $F:\mathcal{A}\to\mathcal{B}$;
  - 态射: 全体分次自然变换;
  - 复合: 自然变换的通常复合.

##### 左分次模

- 分次范畴 $\mathcal{A}$ 上的一个 **[左分次模]** 是一个分次函子 $M:\mathcal{A}\to\mathcal{G}(\Bbbk)$, 或等价地:

  - 我们把范畴 $\mathcal{A}$ 等同于直和 $\tilde{\mathcal{A}}=\bigoplus_{A,B\in\mathcal{A}}\mathcal{A}(A,B)$, 这是一个[有足够多正交幂等元](https://en.wikipedia.org/wiki/Rng_(algebra))的分次代数;
  - 我们把函子 $M$ 等同于直和 $\tilde M=\bigoplus_{A\in\mathcal{A}}M(A)$, 这是一个分次 $\Bbbk$-模;
  - 对任意态射 $a:A\to B$ 和任意 $m\in M(A)\subseteq\tilde M$, 记 $a\cdot m=M(a)(m)$; 当 $m\notin M(A)$ 时, 规定 $a\cdot m=0$. 则这给出了 $\tilde{\mathcal{A}}$ 在 $\tilde M$ 上的一个模作用, 且 $\tilde M$ 是 **[幺 $\tilde{\mathcal{A}}$-模]** (即 $\tilde{\mathcal{A}}\tilde M=\tilde M$).
  - 容易证明: 在同构意义下, 左分次 $\mathcal{A}$-模一一对应于左分次幺 $\tilde{\mathcal{A}}$-模. **[证明]:** 给定左分次 $\mathcal{A}$-模 $M$, 我们可以构造如上的 $\tilde M$. 反过来, 给定左分次幺 $\tilde{\mathcal{A}}$-模 $\tilde M$. 对任意 $A\in\mathcal{A}$, 记 $e_A=\mathbf1_A\in\tilde{\mathcal{A}}$ 为相应的幂等元, 则 $\{e_A\}_{A\in\mathcal{A}}$ 是两两正交幂等元的集合. 构造函子 $M:\mathcal{A}\to\mathcal{G}(\Bbbk)$, 使得 $M(A)=e_A\tilde M$, 对于态射 $a:A\to B$ 有 $M(a):M(A)\to M(B)$, $m\mapsto am$ (这是良定义的, 因为 $a=e_Bae_A$). 因为 $\tilde M$ 是幺模, 所以 $\tilde M=\bigoplus_{A\in\mathcal{A}}M(A)$, 可见上述两个构造是互逆的. (根据下面的构造, 这实际上也是一个范畴等价.) 

- 左分次 $\mathcal{A}$-模 $M$ 的 **[平移]**, 记为 $M[1]$, 定义如下:

  - $(M[1])(A)=M(A)[1]$ 对任意 $A\in\mathcal{A}$ 成立;
  - 对于 $m\in M(A)$, 我们将 $M(A)[1]$ 中与之对应的元素记为 $m[1]$;
  - $a\cdot (m[1])=(a\cdot m)[1]$ 对任意  $a\in\mathcal{A}(A,B),m\in M(A)$ 成立.

  类似地定义 $M[-1]$, 容易验证 $M[1][-1]=M[-1][1]=M$. 递归定义 $M[p]$, $\forall p\in\mathbb{Z}$.

- 左分次 $\mathcal{A}$-模的 **[$p$-次同态]** $f:M\to N$ 是一个 $p$ 次自然变换, 或等价定义为分次模同态 $M\to N[p]$. 具体来讲:

  - 对任意态射 $a:A\to B$ 和任意 $m\in M(A)$, 有 $f(a\cdot m)=(-1)^{|a||f|}a\cdot f(m)$;
  - 对任意 $m\in M(A)$, 有 $|f(m)|=|m|+|f|$.

- 定义 **[左分次 $\mathcal{A}$-模的Abel范畴]** $\mathcal{A}\text{-}\mathsf{Mod}$:

  - 对象: 全体左分次 $\mathcal{A}$-模;
  - 态射: 全体 $0$-次模同态, 态射集记为 $\Hom_{\mathcal{A}}(M,N)$ 的形式;
  - 复合: 通常意义下的复合.

- 定义 **[左分次 $\mathcal{A}$-模的分次范畴]** $\mathcal{A}\text{-}\mathsf{Mod}_{gr}$:

  - 对象: 全体左分次 $\mathcal{A}$-模;
  - 态射: 全体分次模同态, 态射集记为 $\scHom_{\mathcal{A}}(M,N)$ 的形式, 我们有 $\scHom_{\mathcal{A}}(M,N)=\bigoplus_{p\in\mathbb{Z}}\Hom_{\mathcal{A}}(M,N[p])$, 这里右端直和项是 $\mathcal{A}\text{-}\mathsf{Mod}$ 中的态射集;
    - 这里用 $\scHom$ 是因为它将两个分次 $\mathcal{A}$-模映为一个分次 $\Bbbk$-模, 所以某种意义上它是一个内部 $\Hom$-函子. 后面讨论dg模的 $\Hom$ 时, 也将用类似的记号.
  - 复合: 通常意义下的复合.

##### 右分次模

- 分次范畴 $\mathcal{A}$ 上的一个 **[右分次模]** 是一个分次函子 $M:\mathcal{A}^{\mathrm{op}}\to\mathcal{G}(\Bbbk)$. 
  - 模作用记为 $m\cdot a$, 其中 $a\in\mathcal{A}^{\mathrm{op}}(A,B)$, $m\in\mathcal{A}^{\mathrm{op}}(A)$.
  - 右分次 $\mathcal{A}$-模 $M$ 的 **[平移]** $M[1]$ 定义为:
    - $(M[1])(A)=M(A)[1]$ 对任意 $A\in\mathcal{A}$ 成立;
    - 对于 $m\in M(A)$, 我们将 $M(A)[1]$ 中与之对应的元素记为 $m[1]$;
    - $(m[1])\cdot a=(-1)^{|a|}(m\cdot a)[1]$ 对任意  $a\in\mathcal{A}(A,B),m\in M(A)$ 成立.
  - 分次 $\mathcal{A}$-模的 **[$p$-次同态]** $f:M\to N$ 是一个 $p$ 次自然变换, 或等价定义为一个分次模同态 $M\to N[p]$. 具体来讲:
    - 对任意态射 $a:A\to B$ 和任意 $m\in M(B)$, 有 $f(m\cdot a)=f(m)\cdot a$;
    - 对任意 $m\in M(A)$, 有 $|f(m)|=|m|+|f|$.
  - 可以类似地定义 **[右分次 $\mathcal{A}$-模的Abel范畴]** $\mathsf{Mod}\text{-}\mathcal{A}$ 和 **[右分次 $\mathcal{A}$-模的分次范畴]** $\mathsf{Mod}_{gr}\text{-}\mathcal{A}$.
- 右分次 $\mathcal{A}$-模与左分次 $\mathcal{A}^{\mathrm{op}}$-模的关系: 
  - 给定右分次 $\mathcal{A}$-模 $M$, 则 $M$ 上有如下的左分次 $\mathcal{A}^{\mathrm{op}}$-模结构: $a\cdot_{\mathrm{op}}m=(-1)^{|a||m|}m\cdot a$, 对任意 $a\in\mathcal{A}(B,A)$ 和 $m\in M(A)$ 成立. 我们将这个左分次 $\mathcal{A}^{\mathrm{op}}$-模记为 $M^{\mathrm{op}}$;
  - 此时 $M^{\mathrm{op}}[p]=(M[p])^{\mathrm{op}}$ (作为左分次 $\mathcal{A}^{\mathrm{op}}$-模相等);
- 对于分次范畴 $\mathcal{A}$ 和对象 $A\in\mathcal{A}$, 定义一个右分次模 $\widehat{A}=\mathcal{A}(-,A)$.
  - 更具体地: 对任意态射 $f:B\to C$ (视为 $\mathcal{A}$ 的元素) 和任意态射 $g:C\to A$ (视为 $\widehat A$ 的元素), 定义 $g\cdot f=\widehat A(f)(g)=(-1)^{|f||g|}g\circ f$.
  - $\widehat A$ 具有如下性质: 对任意右分次 $\mathcal{A}$-模 $M$, 有自然的分次同构 $\scHom_{\mathcal{A}}(\widehat A,M)\cong M(A)$, $f\mapsto f(A)(\mathbf1_A)$. 由此可知 $\Hom_{\mathcal{A}}(\widehat A,M)\cong M(A)^0$.

##### 双边分次模

- 一个分次 $\mathcal{A}$-$\mathcal{B}$-双模 $M$ 是一个左分次 $\mathcal{A}\otimes\mathcal{B}^{\mathrm{op}}$-模.

  - 更具体地讲, $M$ 同时是左分次 $\mathcal{A}$-模和右分次 $\mathcal{B}$-模, 且两个模结构在如下意义下相容: 对于 $m\in M(A\otimes B)$, $a:A\to A'$ 和 $b:B'\to B$, 我们有 $(a\cdot m)\cdot b=a\cdot(m\cdot b)$.
  - 一个分次 $\mathcal{A}$-$\mathcal{B}$-双模也可以定义成一个右分次 $\mathcal{A}^{\mathrm{op}}\otimes\mathcal{B}$-模.
  - 用 $_\mathcal{A}M_\mathcal{B}$ 表示 $M$ 是一个分次 $\mathcal{A}$-$\mathcal{B}$-双模.
  - 用 $\mathcal{A}\text{-}\mathsf{Mod}\text{-}\mathcal{C}$ 表示分次 $\mathcal{A}$-$\mathcal{B}$-双模和0次双模同态的Abel范畴.
  - 用 $\mathcal{A}\text{-}\mathsf{Mod}_{gr}\text{-}\mathcal{C}$ 表示分次 $\mathcal{A}$-$\mathcal{B}$-双模和所有次数的双模同态构成的分次范畴.
  - 将基环 $\Bbbk$ 视为只有一个对象的分次范畴. 则
    - 一个分次左 $\mathcal{A}$-模可以视为一个分次 $\mathcal{A}$-$\Bbbk$-双模;
    - 一个分次右 $\mathcal{A}$-模可以视为一个分次 $\Bbbk$-$\mathcal{A}$-双模.

- 给定分次双模 $_\mathcal{A}M_\mathcal{B}$ 和 $_\mathcal{B}N_\mathcal{C}$. 我们定义一个分次 $\mathcal{A}$-$\mathcal{C}$-双模 $M\otimes_\mathcal{B}N$, 称为 $M,N$ 的 **[张量积]**:

  - 对于 $A\in\mathcal{A}$ 和 $C\in\mathcal{C}$, 令 $(M\otimes_\mathcal{B}N)(A,C)$ $=$ $\mathop{\mathrm{Coker}}\left(\bigoplus\limits_{B,B'\in\mathcal{B}}M(A,B')\otimes\mathcal{B}(B,B')\otimes N(B,C)\to\bigoplus\limits_{B\in\mathcal{B}}M(A,B)\otimes N(B,C)\right)$, 括号内部的映射定义为 $m\otimes b\otimes n\mapsto(m\cdot b)\otimes n-m\otimes(b\cdot n)$.
  - 对于 $\mathcal{A}$ 中态射 $a$ 和 $\mathcal{C}$ 中态射 $c$, 态射 $(M\otimes_\mathcal{B}N)(a\otimes c)$ 的定义由上述 Coker 的泛性质给出. 容易验证这些数据给出了一个分次 $\mathcal{A}$-$\mathcal{C}$-双模.

- 给定分次双模 $_\mathcal{A}M_\mathcal{B}$ 和 $_\mathcal{A}N_\mathcal{C}$. 我们定义一个分次 $\mathcal{B}$-$\mathcal{C}$-双模 $\scHom_{\mathcal{A}}(M,N)$:

  - 对于 $B\in\mathcal{B}$ 和 $C\in\mathcal{C}$, 我们可以将 $M(-,B)$ 和 $N(-,C)$ 视为分次左 $\mathcal{A}$-模. 于是, 我们令 $(\scHom_{\mathcal{A}}(M,N))(B,C)$ $=$ $\scHom_{\mathcal{A}}(M(-,B),N(-,C))$.
  - $\scHom_{\mathcal{A}}(M,N)^0\cong\Hom_{\mathcal{A}}(M,N)$.
  - 对于 $\mathcal{B}$ 中态射 $b$ 和 $\mathcal{C}$ 中态射 $c$, 态射 $(\scHom_{\mathcal{A}}(M,N))(b\otimes c)$ 由 $M(-,b),N(-,c)$ 给出. 容易验证这些数据给出了一个分次 $\mathcal{B}$-$\mathcal{C}$-双模.

- 类似地, 给定分次双模 $_\mathcal{A}M_\mathcal{C}$ 和 $_\mathcal{B}N_\mathcal{C}$, 我们可以定义一个分次 $\mathcal{B}$-$\mathcal{A}$-双模 $\scHom_{\mathcal{C}}(M,N)$.

- 伴随同构: 给定分次双模 $_\mathcal{A}M_\mathcal{B}$, 我们有两个伴随对:

  - $(M\otimes_\mathcal{B}-,\scHom_{\mathcal{A}}(M,-)):\mathcal{B}\text{-}\mathsf{Mod}_{gr}\text{-}\mathcal{C}\to\mathcal{A}\text{-}\mathsf{Mod}_{gr}\text{-}\mathcal{C}$;
  - $(-\otimes_\mathcal{A}M,\scHom_{\mathcal{B}}(M,-)):\mathcal{C}\text{-}\mathsf{Mod}_{gr}\text{-}\mathcal{A}\to\mathcal{C}\text{-}\mathsf{Mod}_{gr}\text{-}\mathcal{B}$.

  取 $0$ 次分支, 我们得到两个伴随对:

  - $(M\otimes_\mathcal{B}-,\scHom_{\mathcal{A}}(M,-)):\mathcal{B}\text{-}\mathsf{Mod}\text{-}\mathcal{C}\to\mathcal{A}\text{-}\mathsf{Mod}\text{-}\mathcal{C}$;
  - $(-\otimes_\mathcal{A}M,\scHom_{\mathcal{B}}(M,-)):\mathcal{C}\text{-}\mathsf{Mod}\text{-}\mathcal{A}\to\mathcal{C}\text{-}\mathsf{Mod}\text{-}\mathcal{B}$.

#### dg范畴

- 一个 **[dg范畴]** 是一个 $\Bbbk$-线性范畴 $\mathcal{A}$, 使得
  - $\mathcal{A}$ 是分次范畴, 即 $\mathcal{A}$ 的每个态射空间都是分次 $\Bbbk$-模, 且复合保持分次;
  - 每个态射空间 $\mathcal{A}(A,B)$ 上都有一个 **[微分]** $d$, 使得 $|d|=1$ 且 $d^2=0$, 即 $\mathcal{A}(A,B)$ 是链复形;
  - $d$ 关于 $\circ$ 满足 **[Leibniz法则]**: $d(g\circ f)=d(g)\circ f+(-1)^{|g|}g\circ d(f)$, 对任意 $f:A\to B, g:B\to C$ 成立.
  
- 一个dg范畴 $\mathcal{A}$ 能给出许多新的范畴. 这些范畴的对象类都和 $\mathcal{A}$ 一样, 但态射各有不同:

  - 一个分次 $\Bbbk$-范畴 $Z^\bullet\mathcal{A}$, 态射是 $(Z^\bullet\mathcal{A})(A,B)=Z^\bullet\mathcal{A}(A,B)$. 
  - 一个 $\Bbbk$-范畴 $Z^0\mathcal{A}$, 称为 $\mathcal{A}$ 的 **[复形范畴]**, 态射是 $(Z^0\mathcal{A})(A,B)=Z^0\mathcal{A}(A,B)$.
  - 一个分次 $\Bbbk$-范畴 $H^\bullet\mathcal{A}$, 态射是 $(H^\bullet\mathcal{A})(A,B)=H^\bullet\mathcal{A}(A,B)$.
  - 一个 $\Bbbk$-范畴 $H^0\mathcal{A}$, 称为 $\mathcal{A}$ 的 **[同伦范畴]**, 态射是 $(H^0\mathcal{A})(A,B)=H^0\mathcal{A}(A,B)$.

- 一个 **[dg函子]** $F:\mathcal{A}\to\mathcal{B}$ 是一个 $\Bbbk$-线性函子, 使得 $F(A,B):\mathcal{A}(A,B)\to\mathcal{B}(FA,FB)$ 都是链映射 $\forall A,B\in\mathcal{A}$. 任意dg函子 $F:\mathcal{A}\to\mathcal{B}$ 均诱导了下列函子: $Z^\bullet F,Z^0F,H^\bullet F,H^0F$.

  - $F$ 是 **[dg本质满的]**, 如果 $Z^0F:Z^0\mathcal{A}\to Z^0\mathcal{B}$ 是本质满的.
  - $F$ 是 **[dg等价]**, 如果 $F$ 是全忠实且dg本质满的.
  - $F$ 是 **[拟全忠实的]**, 如果 $H^\bullet F:H^\bullet\mathcal{A}\to H^\bullet\mathcal{B}$ 是全忠实的.
  - $F$ 是 **[拟等价]**, 如果 $F$ 是拟全忠实的, 且 $H^0F:H^0\mathcal{A}\to H^0\mathcal{B}$ 是本质满的.

- 一个 **[dg自然变换]** $\gamma:F\to F':\mathcal{A}\to\mathcal{B}$ 是一族态射 $\gamma_A:FA\to GA$, 满足 $d_\mathcal{B}(\gamma_A)=0$, 且对 $\mathcal{A}$ 中的任意态射 $f:A\to B$ 均有 $G(f)\circ\gamma_A=\gamma_B\circ F(f)$.

- dg范畴 $\mathcal{A}$ 的 **[反范畴]** $\mathcal{A}^{\mathrm{op}}$ 是如下的dg范畴:

  - 对象: 和 $\mathcal{A}$ 一样;
  - 态射: $\mathcal{A}^{\mathrm{op}}(A,B)=\mathcal{A}(B,A)$;
  - 微分: 和 $\mathcal{A}$ 一样;
  - 复合: $\circ^{\mathrm{op}}:\mathcal{A}^{\mathrm{op}}(B,C)\otimes\mathcal{A}^{\mathrm{op}}(A,B)\to\mathcal{A}^{\mathrm{op}}(A,C)$ 定义为 $g\circ^{\mathrm{op}}f=(-1)^{|f||g|}f\circ g$.

  显然 $(\mathcal{A}^{\mathrm{op}})^{\mathrm{op}}=\mathcal{A}$.

- 两个DG范畴 $\mathcal{A,B}$ 的 **[张量积]** $\mathcal{A\otimes B}$ 是如下的DG范畴:

  - 对象: 二元组 $(A,B)$, 其中 $A\in\mathcal{A}$, $B\in\mathcal{B}$.
  - 态射: 二元组 $f\otimes g:(A,B)\to(A',B')$, 其中 $f:A\to A'$, $g:B\to B'$. 约定 $|f\otimes g|=|f|+|g|$. 所以态射空间同构于分次空间的张量积 $(\mathcal{A\otimes B})((A,B),(A',B'))\cong\mathcal{A}(A,A')\otimes\mathcal{B}(B,B')$.
  - 微分: $d(f\otimes g)=d(f)\otimes g+(-1)^{|f|}f\otimes d(g)$.
  - 复合: $(f'\otimes g')\circ(f\otimes g)=(-1)^{|g'||f|}(f'\circ f)\otimes(g'\circ g)$.

- 例: $\Bbbk$-模链复形的范畴 $\mathcal{C}(\Bbbk)$ 是一个dg范畴, 其中

  - 对象: dg $\Bbbk$-模;
  - 态射: 分次 $\Bbbk$-模同态;
  - 微分: 对于分次同态 $f:A\to B$, 规定 $d(f)=d_B\circ f-(-1)^{|f|}f\circ d_A$.
  - 复合: 通常意义下的的复合.
  
- 例: 给定两个dg范畴 $\mathcal{A},\mathcal{B}$. 我们有 **[dg函子的dg范畴]** $\op{Fun}_{dg}(\mathcal{A},\mathcal{B})$, 其中

  - 对象: dg函子 $F:\mathcal{A}\to\mathcal{B}$;
  - 态射: 全体分次自然变换;
  - 微分: 对于 $\gamma:F\to G$, 规定 $d(\gamma)_A=d(\gamma_A)=d_{GA}\circ\gamma_A+(-1)^{|\gamma|}\gamma_A\circ d_{FA}$ (可见 $Z^0\op{Fun}_{dg}(\mathcal{A},\mathcal{B})$ 中的态射, 就是dg自然变换);
  - 复合: 自然变换的通常复合.

##### 左dg模

- dg范畴 $\mathcal{A}$ 上的一个 **[左dg模]** 是一个dg函子 $M:\mathcal{A}\to\mathcal{C}(\Bbbk)$, 或等价地:

  - 我们把范畴 $\mathcal{A}$ 等同于直和 $\tilde{\mathcal{A}}=\bigoplus_{A,B\in\mathcal{A}}\mathcal{A}(A,B)$, 这是一个[有足够多正交幂等元](https://en.wikipedia.org/wiki/Rng_(algebra))的dg代数;
  - 我们把函子 $M$ 等同于直和 $\tilde M=\bigoplus_{A\in\mathcal{A}}M(A)$, 这是一个链复形;
  - 对任意态射 $a:A\to B$ 和任意 $m\in M(A)\subseteq\tilde M$, 记 $a\cdot m=M(a)(m)$; 当 $m\notin M(A)$ 时, 规定 $a\cdot m=0$. 则这给出了 $\tilde{\mathcal{A}}$ 在 $\tilde M$ 上的一个模作用, 且 $\tilde M$ 是 幺 $\tilde{\mathcal{A}}$-模, 即 $\tilde{\mathcal{A}}\tilde M=\tilde M$.
  - 容易证明: 在同构意义下, 左dg $\mathcal{A}$-模一一对应于左dg幺 $\tilde{\mathcal{A}}$-模. (根据下面的构造, 这实际上也是一个范畴等价.) 

- 左dg $\mathcal{A}$-模 $M$ 的 **[平移]**, 记为 $M[1]$, 定义如下:

  - $(M[1])(A)=M(A)[1]$ 对任意 $A\in\mathcal{A}$ 成立;
  - 对于 $m\in M(A)$, 我们将 $M(A)[1]$ 中与 $m$ 对应的那个元素记为 $m[1]$;
  - $a\cdot (m[1])=(a\cdot m)[1]$ 对任意  $a\in\mathcal{A}(A,B),m\in M(A)$ 成立;
  - $d_{M[1]}(m[1])=-d_M(m)[1]$.

  类似地定义 $M[-1]$, 容易验证 $M[1][-1]=M[-1][1]=M$. 递归定义 $M[p]$, $\forall p\in\mathbb{Z}$.

- 左dg $\mathcal{A}$-模的 **[$p$-次同态]** $f:M\to N$ 是一个 $p$ 次自然变换, 或等价定义为一个dg同态 $M\to N[p]$. 具体来讲:

  - 对任意态射 $a:A\to B$ 和任意 $m\in M(A)$, 有 $f(a\cdot m)=(-1)^{|a||f|}a\cdot f(m)$;
  - 对任意 $m\in M(A)$, 有 $|f(m)|=|m|+|f|$.
  - 对任意 $m\in M(A)$, 有 $f(d_M(m))=(-1)^{|f|}d_N(f(m))$.

- 映射锥: 设 $f:M\to N$ 是左dg模同态.

  - $f$ 称为 **[链映射]**, 如果 $d(f)=0$ 且 $|f|=0$. 
  - 链映射 $f:M\to N$ 的 **[映射锥]** $\Cone(f)$, 是如下定义的左dg模:
    - 作为分次模, $\Cone(f)=N\oplus M[1]$;
    - 微分 $d_{\Cone(f)}=\begin{bmatrix}d_N&f\\0&d_{M[1]}\end{bmatrix}$.
  - 我们有链映射的分次可裂短正合列: $0\to N\xrightarrow{\left[\begin{smallmatrix}1\\0\end{smallmatrix}\right]}\Cone(f)\xrightarrow{\left[\begin{smallmatrix}0&1\end{smallmatrix}\right]}M[1]\to0$.

- 定义 **[左dg $\mathcal{A}$-模的Abel范畴]** $\mathcal{A}\text{-}\mathsf{Mod}$:

  - 对象: 全体左dg $\mathcal{A}$-模;
  - 态射: 全体 $0$-次dg模同态, 态射集记为 $\Hom_{\mathcal{A}}(M,N)$ 的形式;
  - 复合: 通常意义下的复合.

- 定义 **[左dg $\mathcal{A}$-模的dg范畴]** $\mathcal{A}\text{-}\mathsf{Mod}_{dg}$:

  - 对象: 全体左dg $\mathcal{A}$-模;
  - 态射: 全体分次模同态, 态射集记为 $\scHom_{\mathcal{A}}(M,N)$ 的形式, 我们有 $\scHom_{\mathcal{A}}(M,N)=\bigoplus_{p\in\mathbb{Z}}\Hom_{\mathcal{A}}(M,N[p])$, 这里右端直和项是 $\mathcal{A}\text{-}\mathsf{Mod}$ 中的态射复形;
  - 微分: 对于分次模同态 $f:M\to N$, 规定 $d(f)=d_N\circ f-(-1)^{|f|}f\circ d_M$; 显然我们有 $Z^0\scHom_{\mathcal{A}}(M,N)=\Hom_{\mathcal{A}}(M,N)$.
  - 复合: 通常意义下的复合.

##### 右dg模

- dg范畴 $\mathcal{A}$ 上的一个 **[右dg模]** 是一个dg函子 $M:\mathcal{A}^{\mathrm{op}}\to\mathcal{C}(\Bbbk)$. 
  - 模作用常记为 $m\cdot a$, 其中 $a\in\mathcal{A}^{\mathrm{op}}(A,B)$, $m\in\mathcal{A}^{\mathrm{op}}(A)$.
    - Leibniz法则写为: $d(m\cdot a)=d(m)\cdot a+(-1)^{|m|}m\cdot d(a)$.
  - 右dg $\mathcal{A}$-模 $M$ 的 **[平移]** $M[1]$ 定义为:
    - $(M[1])(A)=M(A)[1]$ 对任意 $A\in\mathcal{A}$ 成立;
    - 对于 $m\in M(A)$, 我们将 $M(A)[1]$ 中与 $m$ 对应的那个元素记为 $m[1]$;
    - $(m[1])\cdot a=(-1)^{|a|}(m\cdot a)[1]$ 对任意  $a\in\mathcal{A}(A,B),m\in M(A)$ 成立;
    - $d_{M[1]}(m[1])=-d_M(m)[1]$.
  - 右dg $\mathcal{A}$-模的 **[$p$-次同态]** $f:M\to N$ 是一个 $p$ 次自然变换, 或等价定义为一个右dg $\mathcal{A}$-模的dg同态 $M\to N[p]$. 具体来讲:
    - 对任意态射 $a:A\to B$ 和任意 $m\in M(B)$, 有 $f(m\cdot a)=f(m)\cdot a$;
    - 对任意 $m\in M(A)$, 有 $|f(m)|=|m|+|f|$.
    - 对任意 $m\in M(A)$, 有 $f(d_M(m))=(-1)^{|f|}d_N(f(m))$.
  - 右dg $\mathcal{A}$-模链映射 $f:M\to N$ 的 **[映射锥]** 的定义是类似的.
  - 可以类似地定义 **[右dg $\mathcal{A}$-模范畴]** $\mathsf{Mod}\text{-}\mathcal{A}$ 和 **[右dg $\mathcal{A}$-模的dg范畴]** $\mathsf{Mod}_{dg}\text{-}\mathcal{A}$.
- 右dg $\mathcal{A}$-模与左dg $\mathcal{A}^{\mathrm{op}}$-模的关系: 
  - 给定右dg $\mathcal{A}$-模 $M$, 则 $M$ 上有如下的左dg $\mathcal{A}^{\mathrm{op}}$-模结构: $a\cdot_{\mathrm{op}}m=(-1)^{|a||m|}m\cdot a$, 对任意 $a\in\mathcal{A}(B,A)$ 和 $m\in M(A)$ 成立. 我们将这个左dg模记为 $M^{\mathrm{op}}$;
  - 此时 $M^{\mathrm{op}}[p]=(M[p])^{\mathrm{op}}$ (作为左dg $\mathcal{A}^{\mathrm{op}}$-模相等);
- 对于dg范畴 $\mathcal{A}$ 和对象 $A\in\mathcal{A}$, 定义一个右dg模 $\widehat{A}=\mathcal{A}(-,A)$.
  - 更具体地: 
    - 对任意态射 $f:B\to C$ (视为 $\mathcal{A}$ 的元素) 和任意态射 $g:C\to A$ (视为 $\widehat A$ 的元素), 定义 $g\cdot f=\widehat A(f)(g)=(-1)^{|f||g|}g\circ f$.
    - 对任意态射 $g:C\to A$ (视为 $\widehat A$ 的元素), 定义 $d(g)=d_{\mathcal{A}}(g)$.
  - $\widehat A$ 具有如下性质: 对任意dg $\mathcal{A}$-模 $M$, 有自然的复形同构 $\scHom_{\mathcal{A}}(\widehat A,M)\cong M(A)$, $f\mapsto f(A)(\mathbf1_A)$. 由此可知 $\Hom_{\mathcal{A}}(\widehat A,M)\cong Z^0M(A)$.

##### 双边dg模

- 一个dg $\mathcal{A}$-$\mathcal{B}$-双模 $M$ 是一个左dg $\mathcal{A}\otimes\mathcal{B}^{\mathrm{op}}$-模. 

  - 更具体地讲, $M$ 同时是左dg $\mathcal{A}$-模和右dg $\mathcal{B}$-模, 且两个模结构在如下意义下相容: 对于 $m\in M(A\otimes B)$, $a:A\to A'$ 和 $b:B'\to B$, 我们有 $(a\cdot m)\cdot b=a\cdot(m\cdot b)$.
  - 一个dg $\mathcal{A}$-$\mathcal{B}$-双模也可以定义成一个右dg $\mathcal{A}^{\mathrm{op}}\otimes\mathcal{B}$-模.
  - 用 $_\mathcal{A}M_\mathcal{B}$ 表示 $M$ 是一个dg $\mathcal{A}$-$\mathcal{B}$-双模.
  - 用 $\mathcal{A}\text{-}\mathsf{Mod}\text{-}\mathcal{C}$ 表示dg $\mathcal{A}$-$\mathcal{B}$-双模和0次双模同态的Abel范畴.
  - 用 $\mathcal{A}\text{-}\mathsf{Mod}_{dg}\text{-}\mathcal{C}$ 表示dg $\mathcal{A}$-$\mathcal{B}$-双模和所有分次双模同态构成的dg范畴.
  - 将基环 $\Bbbk$ 视为只有一个对象的dg范畴. 则
    - 一个左dg $\mathcal{A}$-模可以视为一个dg $\mathcal{A}$-$\Bbbk$-双模;
    - 一个右dg $\mathcal{A}$-模可以视为一个dg $\Bbbk$-$\mathcal{A}$-双模.

- 给定dg双模 $_\mathcal{A}M_\mathcal{B}$ 和 $_\mathcal{B}N_\mathcal{C}$. 我们定义一个dg $\mathcal{A}$-$\mathcal{C}$-双模 $M\otimes_\mathcal{B}N$, 称为 $M,N$ 的 **[张量积]**:

  - 对于 $A\in\mathcal{A}$ 和 $C\in\mathcal{C}$, 令 $(M\otimes_\mathcal{B}N)(A,C)$ $=$ $\mathop{\mathrm{Coker}}\left(\bigoplus\limits_{B,B'\in\mathcal{B}}M(A,B')\otimes\mathcal{B}(B,B')\otimes N(B,C)\to\bigoplus\limits_{B\in\mathcal{B}}M(A,B)\otimes N(B,C)\right)$, 括号内部的映射定义为 $m\otimes b\otimes n\mapsto(m\cdot b)\otimes n-m\otimes(b\cdot n)$.
  - 对于 $\mathcal{A}$ 中态射 $a$ 和 $\mathcal{C}$ 中态射 $c$, 态射 $(M\otimes_\mathcal{B}N)(a\otimes c)$ 的定义由上述 Coker 的泛性质给出. 容易验证这些数据给出了一个dg $\mathcal{A}$-$\mathcal{C}$-双模.

- 给定dg双模 $_\mathcal{A}M_\mathcal{B}$ 和 $_\mathcal{A}N_\mathcal{C}$. 我们定义一个dg $\mathcal{B}$-$\mathcal{C}$-双模 $\scHom_{\mathcal{A}}(M,N)$:

  - 对于 $B\in\mathcal{B}$ 和 $C\in\mathcal{C}$, 我们可以将 $M(-,B)$ 和 $N(-,C)$ 视为左dg $\mathcal{A}$-模. 于是, 我们令 $(\scHom_{\mathcal{A}}(M,N))(B,C)$ $=$ $\scHom_{\mathcal{A}}(M(-,B),N(-,C))$.
  - $Z^0\scHom_{\mathcal{A}}(M,N)\cong\Hom_{\mathcal{A}}(M,N)$.
  - 对于 $\mathcal{B}$ 中态射 $b$ 和 $\mathcal{C}$ 中态射 $c$, 态射 $(\scHom_{\mathcal{A}}(M,N))(b\otimes c)$ 由 $M(-,b),N(-,c)$ 给出. 容易验证这些数据给出了一个dg $\mathcal{B}$-$\mathcal{C}$-双模.

- 类似地, 给定dg双模 $_\mathcal{A}M_\mathcal{C}$ 和 $_\mathcal{B}N_\mathcal{C}$, 我们可以定义一个dg $\mathcal{B}$-$\mathcal{A}$-双模 $\scHom_{\mathcal{C}}(M,N)$.

- 伴随同构: 给定dg双模 $_\mathcal{A}M_\mathcal{B}$, 我们有两个伴随对:

  - $(M\otimes_\mathcal{B}-,\scHom_{\mathcal{A}}(M,-)):\mathcal{B}\text{-}\mathsf{Mod}_{dg}\text{-}\mathcal{C}\to\mathcal{A}\text{-}\mathsf{Mod}_{dg}\text{-}\mathcal{C}$;
  - $(-\otimes_\mathcal{A}M,\scHom_{\mathcal{B}}(M,-)):\mathcal{C}\text{-}\mathsf{Mod}_{dg}\text{-}\mathcal{A}\to\mathcal{C}\text{-}\mathsf{Mod}_{dg}\text{-}\mathcal{B}$.

  取 $Z^0$, 我们得到两个伴随对:

  - $(M\otimes_\mathcal{B}-,\scHom_{\mathcal{A}}(M,-)):\mathcal{B}\text{-}\mathsf{Mod}\text{-}\mathcal{C}\to\mathcal{A}\text{-}\mathsf{Mod}\text{-}\mathcal{C}$;
  - $(-\otimes_\mathcal{A}M,\scHom_{\mathcal{B}}(M,-)):\mathcal{C}\text{-}\mathsf{Mod}\text{-}\mathcal{A}\to\mathcal{C}\text{-}\mathsf{Mod}\text{-}\mathcal{B}$.

  证明提示: 转化到有足够多正交幂等元的dg代数上, 再证明伴随同构.

- 两个常用同构: 对于 $A\in\mathcal{A}$  和左dg $\mathcal{A}$-模 $M$, 有

  - $\widehat{A}\otimes_\mathcal{A}M\cong M(A)$.
    - **[证明]** 对任意 $\Bbbk$-复形 $N$, 我们有伴随同构 $\scHom_{\Bbbk}(\widehat{A}\otimes_\mathcal{A}M,N)$ $\cong$ $\scHom_{\mathcal{A}}(\widehat{A},\scHom_\Bbbk(M,N))$. 这里 $\scHom_\Bbbk(M,N)$ 是一个右dg $\mathcal{A}$-模, 因此Yoneda引理给出 $\scHom_{\mathcal{A}}(\widehat{A},\scHom_\Bbbk(M,N))$ $\cong$ $\scHom_\Bbbk(M(A),N)$. **[证毕]**
  - $\scHom_{\mathcal{A}}(\mathcal{A}(A,-),M)\cong M(A)$.
    - **[证明]** 对任意 $\Bbbk$-复形 $N$, 我们有伴随同构 $\scHom_{\Bbbk}(N,\scHom_{\mathcal{A}}(\mathcal{A}(A,-),M))$ $\cong$ $\scHom_{\mathcal{A}}(N\otimes\mathcal{A}(A,-),M)$ $\cong$ $\scHom_{\Bbbk}(\mathcal{A}(A,-),\scHom_{\mathcal{A}}(N,M))$. 这里 $\scHom_\Bbbk(N,M)$ 是一个左dg $\mathcal{A}$-模, 因此左模版本的Yoneda引理给出 $\scHom_{\Bbbk}(\mathcal{A}(A,-),\scHom_{\mathcal{A}}(N,M))$ $\cong$ $\scHom_\Bbbk(N,M(A))$. **[证毕]**

### 同伦范畴

本节只考虑右dg模, 左模情形是完全对偶的.

#### 同伦范畴 $\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})$

##### 同伦

- 设 $\mathcal{A}$ 是一个dg范畴, $M,N$ 是右dg $\mathcal{A}$-模. 
  - 两个链映射 $f,g:M\to N$ 称为 **[同伦的]**, 如果存在 $-1$ 次分次同态 $h:M\to N$, 使得 $f-g=d(h)=d_N\circ h+h\circ d_M$.
  - 等价地, $f,g$ 是同伦的, 如果在 $\scHom_{\mathcal{A}}(M,N)$ 中, $f,g$ 给出同一个 $0$-上同调类.
  - 容易验证: 同伦是一个同余关系.

##### 同伦范畴

- 右dg模范畴 $\mathsf{Mod}\text{-}\mathcal{A}$ 的 **[同伦范畴]** $\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})$ 定义为 $H^0(\mathsf{Mod}_{dg}\text{-}\mathcal{A})$, 更具体地:
  - 对象: 和 $\mathsf{Mod}\text{-}\mathcal{A}$ 一样, 是所有的右dg $\mathcal{A}$-模;
  - 态射: $\Hom_{\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})}(M,N)=\Hom_{\mathcal{A}}(M,N)/\sim$, 其中 $\sim$ 是同伦关系.
  - 复合: 同伦类的复合 ($\sim$ 是同余关系保证了这是良定义的).
- $\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})$ 是三角范畴.
  - $\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})$ 中的好三角刻画如下: 对于链复形的分次可裂短正合列 $0\to L\xrightarrow{u}M\xrightarrow{v}N\to0$, 存在一个好三角 $L\xrightarrow{u}M\xrightarrow{v}N\xrightarrow{w}L[1]$, 其中 $w=\pi\circ d_M\circ s$, 其中 $s$ 是 $v$ 的一个截面, $\pi$ 是 $u$ 的一个收缩. 在同伦范畴里 $w$ 不依赖于 $\pi,s$ 的选取. 任何好三角都同构于一个这样给出的三角.
  - 有多种证法:
    - 对于dg代数的的dg模范畴, 章璞《三角范畴与导出范畴》第二章1-5节基本上可以照搬过来; 而对于dg范畴 $\mathcal{A}$, 也可以转化到 $\tilde{\mathcal{A}}$ 的dg幺模范畴中进行证明.
    - Keller《Deriving DG categories》第2.2小节，将 $\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})$ 实现为一个Frobenius范畴的稳定三角范畴.
- **[关键公式]**: $\Hom_{\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})}(M[m],N[n])\cong H^{n-m}\scHom_{\mathcal{A}}(M,N)$. 见章璞《三角范畴与导出范畴》第2.7节.

#### dg模的分解

##### 同伦投射分解

- dg $\mathcal{A}$-模 $P$ 称为 **[同伦投射模]**, 如果对任意零调dg模 $N$ 有 $\Hom_{\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})}(P,N)=0$.
  - 例: 若 $\mathcal{A}$ 是普通代数 (无分次, 无微分), 则一个上有界投射复形是一个同伦投射复形.
  - 例: 对任意对象 $A\in\mathcal{A}$ 和整数 $k$, 模 $\widehat{A}[k]$ 是同伦投射模, 因为 $\Hom_{\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})}(\widehat{A}[k],N)\cong H^{-k}\scHom_{\mathcal{A}}(\widehat{A},N)\cong H^{-k}N(A)=0$.
- dg $\mathcal{A}$-模 $M$ 的一个 **[同伦投射分解]** 是一个拟同构的链映射 $\mathbf{p}M\to M$.

**[定理]** 对任意dg模 $M$, 存在一个好三角 $\mathbf{p}M\to M\to\mathbf{a}M\to\mathbf{p}M[1]$, 其中 $\mathbf{p}M$ 是一个同伦投射复形, $\mathbf{a}M$ 是一个零调复形.

**[证明]** 因为 $\mathsf{Mod}\text{-}\mathcal{A}$ 等价于 $\mathsf{Mod}\text{-}\tilde{\mathcal{A}}$, 我们可以在后者中完成证明. 假设 $\tilde{\mathcal{A}}$ 是一个有足够多正交幂等元 $\{e_i\}_{i\in I}$ 的dg代数, 记 $P(i)=e_i\tilde{\mathcal{A}}$, 它是由形如 $\widehat A$ 的 dg $\mathcal{A}$-模给出的, 因此是同伦投射模. 以下证明模仿了《On the construction of triangle equivalences》by Bernhard Keller, 另见《The Stacks Project》[引理09KP](https://stacks.math.columbia.edu/tag/09KP). 

<u>**第一步**</u>: 我们说dg $\tilde{\mathcal{A}}$-模 $P$ 具有 **[性质 (P)]**, 如果存在满足如下三条性质的dg子模的过滤
$$
0\subset F_0P\subset F_1P\subset\cdots F_pP\subset F_{p+1}P\subset\cdots\subset P
\notag
$$

- (1) $P=\bigcup F_pP$;
- (2) 每个包含 $F_pP\to F_{p+1}P$ 都是分次可裂单的;
- (3) 商 $F_{p+1}P/F_pP$ 同构于若干个 $P(i)$ 的平移的直和.

断言: 若 $P$ 具有性质 (P), 则 $P$ 是同伦投射模.

引入符号: 对于 $p<q$, 记 $\iota_{pq}:F_pP\to F_qP$ 为包含映射, 取 $\iota_{p,p+1}$ 的一个收缩 $s_{p+1,p}$, 令 $s_{qp}=s_{p+1,p}\circ\cdots\circ s_{q,q-1}$. 回到断言的证明. 由 (1) 和归纳极限的性质, 我们有dg模链映射的短正合列 $0\to\bigoplus F_pP\xrightarrow{\Phi}\bigoplus F_pP\to P\to0$, 其中 $\Phi=(\Phi_{pq})$, 其中 $\Phi_{pp}=\iota_{pp}$, $\Phi_{p,p+1}=-\iota_{p,p+1}$, 其他分量都为零, 第二个箭头由包含映射 $F_pP\to P$ 组成. 实际上, 第一个态射还是分次可裂单的, 它的一个分次左逆为 $\Psi=(\Psi_{pq})$, 其中当 $p<q$ 时 $\Psi_{pq}=s_{qp}$, 其他 $\Psi_{pq}=0$. 因此我们有 $\mathbf{H}(\mathsf{Mod}\text{-}\tilde{\mathcal{A}})$ 中的好三角 $\bigoplus F_pP\xrightarrow{\Phi}\bigoplus F_pP\to P\to\bigoplus F_pP[1]$.

任取零调dg模 $N$, 由 (2)(3) 可知 $\Hom_{\mathbf{H}(\mathsf{Mod}\text{-}\tilde{\mathcal{A}})}(F_pP,N)=0$, 因而由上同调函子 $\Hom_{\mathbf{H}(\mathsf{Mod}\text{-}\tilde{\mathcal{A}})}(-,N)$ 的性质可知 $\Hom_{\mathbf{H}(\mathsf{Mod}\text{-}\tilde{\mathcal{A}})}(P,N)=0$, 即 $P$ 是同伦投射模.

<u>**第二步**</u>: 断言: 对任意dg模 $M$, 存在链映射 $P\to M$, 使得

- $P\to M$ 是满射;
- $Z(P)\to Z(M)$ 也是满射;
- 存在分次可裂短正合列 $0\to P'\to P\to P''\to0$, 使得 $P',P''$ 都同构于若干个 $P_i$ 的平移的直和.

为此, 对任意 $m\in M$ ($|m|=k$), 由幺性不妨设存在 $i\in I$ 使得 $m\in e_iM$, 我们构造一个dg-模 $P_m$ 如下. 作为分次模, $P_m=P(i)[-k]\oplus P(i)[-k-1]$, 记生成元 $x=e_i[-k],y=e_i[-k-1]$, 我们规定微分为 $d(x)=y$, $d(y)=0$. 定义dg-模同态 $P_m\to M$, 使得 $x\mapsto m$, $y\mapsto d(m)$. 对所有 $m$ 都构造这样的 $P_m\to M$, 则显然 $\bigoplus_{m\in M}P_m\to M$ 是满射. 另一方面, 对任意 $m\in Z(M)$ ($|m|=k$), 构造一个dg-模 $Q_m$ 如下. 作为分次模, $Q_m=P(i[-k])$, 记生成元 $x=e_i[-k]$, 规定微分为 $d(x)=0$. 定义dg-模同态 $Q_m\to M$, 使得 $x\mapsto m$. 则 $Z(\bigoplus_{m\in Z(M)}Q_m)\to Z(M)$ 是满射. 令 $P=\bigoplus_{m\in M}P_m\oplus\bigoplus_{m\in Z(M)}Q_m$, 容易看出 $P\to M$ 符合要求.

<u>**第三步**</u>: 对任意dg模 $M$, 我们记 $M_0=M$ 并递归构造短正合列 $0\to M_{i+1}\to P_i\to M_i\to0$, 其中 $P_i\to M_i$ 符合第二步的条件. 我们就得到了dg模的复形 $A^{\bullet\bullet}=(\cdots\to P_2\xrightarrow{f_2}P_1\xrightarrow{f_1}P_0\to M\to0)$. 容易看出这是一个正合列, 且 $\cdots\to Z(P_2)\xrightarrow{f_2}Z(P_1)\xrightarrow{f_1}Z(P_0)\to Z(M)\to0$ 也是正合列. 

 我们把 $P^{\bullet\bullet}=(\cdots\to P_2\xrightarrow{f_2}P_1\xrightarrow{f_1}P_0\to0)$ 和 $M^{\bullet\bullet}=(\cdots\to0\to M\to0)$ 都视为 $\Bbbk$-模双复形 ($P^{\bullet\bullet}$ 的列是诸 $P_i$, 微分向上, 而行是每个 $P_i$ 的同次项构成的复形; $M^{\bullet\bullet}$ 只有一列), 则上述dg-模复形给出了双复形的链映射 $P^{\bullet\bullet}\to M^{\bullet\bullet}$ 以及dg模复形的好三角 $P^{\bullet\bullet}\to M^{\bullet\bullet}\to A^{\bullet\bullet}\to P^{\bullet\bullet}[1]$. 取全复形 $P=\mathop{\mathrm{Tot}}(P^{\bullet\bullet})$ 就得到了链映射 $P\to M$ 以及dg模的好三角 $P\to M\to\mathop{\mathrm{Tot}}(A^{\bullet\bullet})\to P[1]$. 我们来证明 $P\to M$ 就是 $M$ 的一个同伦投射分解.

先证 $P$ 是同伦投射模. 根据第一步, 我们来构造 $P$ 的一个过滤 $(F_pP)_{p\geq0}$. 我们定义 $F_{2p}P=\mathop{\mathrm{Tot}}(P^{\bullet\bullet}_{\leq p})$, 其中  $P^{\bullet\bullet}_{\leq p}=(\cdots\to0\to P_p\to\cdots\to P_2\xrightarrow{f_2}P_1\xrightarrow{f_1}P_0\to0)$ 是左截断. 利用第二步中的正合列 $0\to P'_{p+1}\to P_{p+1}\to P''_{p+1}\to0$, 我们定义 $F_{2p+1}P=\mathop{\mathrm{Tot}}(\cdots\to0\to P'_{p+1}\to P_p\to\cdots\to P_2\xrightarrow{f_2}P_1\xrightarrow{f_1}P_0\to0)$. 不难发现, 这些 $F_pP$ 都是 $P$ 的dg子模, 且由第二步的构造可知 $(F_pP)_{p\geq0}$ 满足条件 (2)(3). 因此, $P$ 满足性质 (P), 从而是同伦投射模.

然后我们证明 $P\to M$ 是拟同构. 为此只需证明 $\mathop{\mathrm{Tot}}(A^{\bullet\bullet})$ 是零调的. 对任意复形 $L$ 和整数 $n\in\mathbb{Z}$, 定义截断复形 $\tau_{\leq n}L=(\cdots\to L^{n-2}\to L^{n-1}\to Z^{n-1}(L)\to0)$. 我们定义截断双复形 $\tau_{\leq n}A^{\bullet\bullet}=(\cdots\to\tau_{\leq n}P_2\xrightarrow{f_2}\tau_{\leq n}P_1\xrightarrow{f_1}\tau_{\leq n}P_0\to\tau_{\leq n}M\to0)$. 显然 $\mathop{\mathrm{Tot}}(A^{\bullet\bullet})=\mathop{\mathrm{colim}}_n\mathop{\mathrm{Tot}}(\tau_{\leq n}A^{\bullet\bullet})$. 因为 $\tau_{\leq n}A^{\bullet\bullet}$ 是第三象限双复形, 且由构造可知它是行正合的, 由谱序列可知 $\mathop{\mathrm{Tot}}(\tau_{\leq n}A^{\bullet\bullet})$ 是零调的. 因为正向极限与同调可交换, 所以 $\mathop{\mathrm{Tot}}(A^{\bullet\bullet})$ 是零调的. 

我们取 $\mathbf{p}M=P,\mathbf{a}M=\mathop{\mathrm{Tot}}(A^{\bullet\bullet})$ 即可. **[证毕]**

**[定理]** 一个dg模 $P$ 是同伦投射的, 当且仅当 $P$ 同伦等价于一个具有性质 (P) 的dg模. 这里我们说dg $\mathcal{A}$-模 $P$ 具有 **[性质 (P)]**, 如果存在满足如下三条性质的dg子模的过滤
$$
0\subset F_0P\subset F_1P\subset\cdots F_pP\subset F_{p+1}P\subset\cdots\subset P
\notag
$$

- (1) $P=\bigcup F_pP$;
- (2) 每个包含 $F_pP\to F_{p+1}P$ 都是分次可裂单的;
- (3) 商 $F_{p+1}P/F_pP$ 同构于若干个 $\widehat A$ ($A\in\mathcal{A}$) 的平移的直和.

**[证明]** 充分性: 在上一定理中, 我们证明了一个具有性质 (P) 的dg模是同伦投射的, 从而此时 $P$ 也是同伦投射的. 必要性: 设 $P$ 是同伦投射的, 根据上述定理的证明, 存在一个拟同构 $\mathbf{p}P\to P$, 其中 $\mathbf{p}P$ 具有性质 (P). 要证明这是一个同伦等价, 只需证明其映射锥是零伦的. 问题转化为证明: 一个零调的同伦投射模 $M$ 是零伦的. 实际上, $M$ 的双重特性保证了 $\Hom_{\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})}(M,M)=0$. **[证毕]**

##### 同伦内射分解

- dg $\mathcal{A}$-模 $I$ 称为 **[同伦内射模]**, 如果对任意零调dg模 $N$ 有 $\Hom_{\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})}(N,I)=0$.
  - 例: 若 $\mathcal{A}$ 是普通代数 (无分次, 无微分), 则一个下有界内射复形是一个同伦内射复形.
  - 例: 取 $\Bbbk\text{-}\mathsf{Mod}$ 的一个内射余生成子 $E$. 对任意对象 $A\in\mathcal{A}$, 定义右dg $\mathcal{A}$-模 $\check A=\scHom_{\Bbbk}(\mathcal{A}(A,-),E)$. 则对任意整数 $k$, 模 $\check{A}[k]$ 是同伦内射模. 实际上, $\Hom_{\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})}(N,\check{A}[k])\cong H^k\scHom_{\mathcal{A}}(N,\check{A})$, 其中 $\scHom_{\mathcal{A}}(N,\check{A})$ $\cong $ $ \scHom_{\Bbbk}(N\otimes\mathcal{A}(A,-),E)$ $\cong $ $\scHom_{\mathcal{A}}(\mathcal{A}(A,-),\scHom_{\mathcal{A}}(N,E))$ $\cong $ $\scHom_\Bbbk(N(A),E)$, 最后一步同构是Yoneda引理. 因为 $N$ 是零调模, 且 $E$ 是内射 $\Bbbk$-模, 所以 $\scHom_\Bbbk(N(A),E)$ 是正合 $\Bbbk$-复形, 同调群为零. 证毕.
- dg $\mathcal{A}$-模 $M$ 的一个 **[同伦内射分解]** 是一个拟同构的链映射 $M\to\mathbf{i}M$.

以下两个定理的证明, 与同伦投射分解的情形类似, 我们只给出陈述, 不再证明.

**[定理]** 对任意dg模 $M$, 存在一个好三角 $\mathbf{a}'M\to M\to\mathbf{i}M\to\mathbf{a}'M[1]$, 其中 $\mathbf{i}M$ 是一个同伦内射复形, $\mathbf{a}'M$ 是一个零调复形. **[证明略]**

**[定理]** 一个dg模 $I$ 是同伦内射的, 当且仅当 $I$ 同伦等价于一个具有性质 (I) 的dg模. 这里我们说dg模 $I$ 具有 **[性质 (I)]**, 如果存在满足如下三条性质的dg子模的下降过滤
$$
I\supset F_0P\supset F_1P\supset\cdots F_pP\supset F_{p+1}P\supset\cdots\supset0
\notag
$$

- (1) $I=\lim I/F_pI$;
- (2) 每个商同态 $I/F_{p+1}I\to I/F_pI$ 都是分次可裂满的;
- (3) 商 $F_pI/F_{p+1}I$ 同构于若干个 $\check{A}$ ($A\in\mathcal{A}$) 的平移的直积. **[证明略]**

##### 分解函子

- 通过选定同伦投射分解, 可得函子 $\mathbf{p}:\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{hProj}\text{-}\mathcal{A})$, 这里 $\mathsf{hProj}\text{-}\mathcal{A}$ 是全体右dg同伦投射模的加法范畴.

  - 实际上, $\mathbf{p}$ 还是三角函子.

  - 实际上, $\mathbf{p}$ 还将拟同构映为同伦等价. 因为, 若 $f:M\to N$ 是右dg模的拟同构, 则
    $$
    \begin{CD}
    \mathbf{p}M @>>> M @>>> \mathbf{a}M @>>> \mathbf{p}M[1]\\
    @V\mathbf{p}fVV @VfVV @V\mathbf{a}fVV @V\mathbf{p}f[1]VV\\
    \mathbf{p}N @>>> N @>>> \mathbf{a}N @>>> \mathbf{p}N[1]\\
    \end{CD}\notag
    $$
    这里 $f,\mathbf{a}f$ 都是拟同构, 因此由五引理可知 $\mathbf{p}f$ 也是拟同构. 而 $\Cone(\mathbf{p}f)$ 是零调的同伦投射模, 从而是可缩的, 因此 $\mathbf{p}f$ 是同伦等价.

  - 我们有伴随对 $\mathrm{inc}\dashv\mathbf{p}:\mathbf{H}(\mathsf{hProj}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})$. 

- 同理, $\mathbf{a}$ 可以做成一个函子 $\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{Mod}_{\mathrm{ac}}\text{-}\mathcal{A})$.

- 类似地, $\mathbf{i}$ 可以做成一个函子 $\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{hInj}\text{-}\mathcal{A})$.

- 类似地, $\mathbf{a}'$ 可以做成一个函子 $\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{Mod}_{\mathrm{ac}}\text{-}\mathcal{A})$.

### 导出范畴

#### 导出范畴 $\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})$

- 右dg模范畴 $\mathsf{Mod}\text{-}\mathcal{A}$ 的 **[导出范畴]** $\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})$ 定义为Verdier商范畴 $\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})[\text{q.is.}^{-1}]$. 将典范商函子记为 $\mathrm{can}:\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})$.

- 我们有函子:

  - 同伦投射分解 $\mathbf{p}:\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})$, 像为同伦投射模. 
    - 实际上 $\mathbf{p}$ 诱导了三角等价 $\mathbf{p}:\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{hProj}\text{-}\mathcal{A})$;
    - 有伴随对 $\mathrm{can}\dashv\mathbf{p}:\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})$.
  - 同伦投射分解 $\mathbf{i}:\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})$, 像为同伦内射模.
    - 实际上 $\mathbf{i}$ 诱导了三角等价 $\mathbf{i}:\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{hInj}\text{-}\mathcal{A})$;
    - 有伴随对 $\mathbf{i}\dashv\mathrm{can}:\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})$.
  - 零调分解 $\mathbf{a}:\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{Mod}_{\mathrm{ac}}\text{-}\mathcal{A})$;
  - 零调分解 $\mathbf{a}':\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{Mod}_{\mathrm{ac}}\text{-}\mathcal{A})$.
    - 有伴随三元组 $\mathbf{a}'\dashv\mathrm{inc}\dashv\mathbf{a}:\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{Mod}_{\mathrm{ac}}\text{-}\mathcal{A})$, 其中 $\mathrm{inc}:\mathbf{H}(\mathsf{Mod}_{\mathrm{ac}}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})$ 是典范嵌入函子.

- 我们有粘合:
  $$
  \begin{xymatrix}
  (0,0)	*+{\mathbf{H}(\mathsf{Mod}_{\mathrm{ac}}\text{-}\mathcal{A})}="1",
  (60,0)	*+{\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})}="2",
  (120,0)	*+{\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A}).}="3",
  \ar@/_15pt/	_{\mathbf{a}}	"2";"1"
  \ar			|{\mathrm{inc}}	"1";"2"
  \ar@/^15pt/ ^{\mathbf{a}'}	"2";"1"
  \ar@/_15pt/ _{\mathbf{p}}	"3";"2"
  \ar			|{\mathrm{can}}	"2";"3"
  \ar@/^15pt/ ^{\mathbf{i}}	"3";"2"
  \end{xymatrix}
  $$

#### 完美导出范畴

- 回顾: 在三角范畴 $\mathcal{T}$ 中:
  - 一个对象 $X$ 称为 **[小对象]**, 如果 $\mathcal{T}(X,-)$ 与任意直和可交换.
  - 全体小对象关于同构、平移、映射锥、直和项封闭, 因此构成一个厚子范畴, 记为 $\mathcal{T}^c$.
  - 一族对象的类 $\mathcal{X}\subseteq\mathcal{T}$ 称为 **[生成子]**, 如果包含 $\mathcal{X}$ 的最小三角子范畴就是 $\mathcal{T}$.
  - 三角范畴 $\mathcal{T}$ 称为 **[紧生成的]**, 如果
    - $\mathcal{T}$ 有任意直和;
    - $\mathcal{T}$ 有一族由紧对象构成的集合 $\mathcal{X}$, 使得 $Z=0$ 当且仅当 $\Hom_{\mathcal{T}}(\mathcal{X}[k],Z)=0$, $\forall k\in\mathbb{Z}$.
    - 此时我们称 $\mathcal{X}$ 是 $\mathcal{T}$ 的一族 **[紧生成子]**.
  - 回顾 **[Brown可表性定理]**: 设 $\mathcal{T}$ 是由 $\mathcal{X}$ 紧生成的三角范畴. 则:
    - $\mathcal{T}$ 是包含 $\mathcal{X}$ 且关于同构、平移、映射锥、任意直和均封闭的最小三角子范畴.
    - $\mathcal{T}^c$ 是包含 $\mathcal{X}$ 且关于同构、平移、映射锥、均封闭的最小厚子范畴.
    - 若上同调函子 $H:\mathcal{T}\to\mathsf{Ab}$ 将直和变为直积, 则 $H$ 是一个反变可表函子.
- $\mathsf{Mod}\text{-}\mathcal{A}$ 的 **[完美导出范畴]** $\mathsf{perf}(\mathsf{Mod}\text{-}\mathcal{A})$ 是 $\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})$ 中全体小对象构成的厚子范畴.
  - $\widehat{A}$ ($A\in\mathcal{A}$) 都是 $\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})$ 中的小对象, 这是因为 $\Hom_{\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})}(\widehat{A},\bigoplus M_i)$ $\cong$ $\Hom_{\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})}(\widehat{A},\bigoplus M_i)$ $\cong$ $H^0(\bigoplus M_i(A))$ $\cong$ $\bigoplus H^0M_i(A)$ $\cong$ $\bigoplus\Hom_{\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})}(\widehat{A},M_i)$. 它们的平移也是小对象.
  - 不难验证, $\widehat{A}$ ($A\in\mathcal{A}$) 是 $\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})$ 的一族紧生成子.
  - 由Brown可表性定理, $\mathsf{perf}(\mathsf{Mod}\text{-}\mathcal{A})$ 是 $\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})$ 中包含 $\widehat{A}$ ($A\in\mathcal{A}$) 的最小厚子范畴.

- **[命题(Dévissage)]** 设 $\mathcal{T}$ 是有任意直和的三角范畴, $F,F':\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathcal{T}$ 是保持直和的三角函子, $\gamma:F\to F'$ 是自然变换. 
  - (1) $F|\mathsf{perf}(\mathsf{Mod}\text{-}\mathcal{A})$ 是全忠实函子, 当且仅当 $F:\Hom_{\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})}(\widehat{A},\widehat{B}[k])\to\mathcal{T}(F\widehat{A},F\widehat{B}[k])$ 均为同构, $\forall A,B\in\mathcal{A}$ , $\forall k\in\mathbb{Z}$.
  - (2) $F$ 是全忠实函子的一个充分条件是, $F|\mathsf{perf}(\mathsf{Mod}\text{-}\mathcal{A})$ 是全忠实函子, 且 $F\widehat A$ ($A\in\mathcal{A}$) 均为小对象.
  - (3) $F$ 是等价函子, 当且仅当 $F|\mathsf{perf}(\mathsf{Mod}\text{-}\mathcal{A})$ 是全忠实函子, 且 $F\widehat A$ ($A\in\mathcal{A}$) 构成 $\mathcal{T}$ 的一族紧生成子.
  - (4) 自然变换 $\gamma:F\to F'$ 是可逆的, 当且仅当每个 $\gamma_{\widehat{A}}$ ($A\in\mathcal{A}$) 都是同构. **[证明略]**

#### 导出函子

##### 左导出函子

- 对任意dg $\mathcal{A}$-$\mathcal{B}$-双模 $X$, dg函子 $-\otimes_{\mathcal{A}}X:\mathsf{Mod}\text{-}\mathcal{A}\to\mathsf{Mod}\text{-}\mathcal{B}$ 保持同伦和映射锥, 从而诱导了三角函子 $-\otimes_{\mathcal{A}}X:\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{B})$. 我们定义 **[导出张量积函子]** $-\otimes_\mathcal{A}^\mathbf{L}X:\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})\to\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{B})$ 为如下复合函子 (第二行箭头理解为 $\mapsto$):

  $$
  \begin{CD}
  \mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A}) @>\mathbf{p}>>
  \mathbf{H}(\mathsf{hProj}\text{-}\mathcal{A}) @>-\otimes_{\mathcal{A}}X>>
  \mathbf{H}(\mathsf{Mod}\text{-}\mathcal{B}) @>\mathrm{can}>>
  \mathbf{D}(\mathsf{Mod}\text{-}\mathcal{B})\\
  \\
  N @>>> \mathbf{p}N 
  @>>> 
  \mathbf{p}N\otimes_{\mathcal{A}}X @>>> 
  \mathbf{p}N\otimes_{\mathcal{A}}X
  \end{CD}\notag
  $$

- 更一般地, 对任意dg函子 $F:\mathsf{Mod}\text{-}\mathcal{A}\to\mathsf{Mod}\text{-}\mathcal{B}$, 它的 **[左导出函子]** $\mathbf{L}F$ 定义为复合函子 $\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A}) \xrightarrow{\mathbf{p}} \mathbf{H}(\mathsf{hProj}\text{-}\mathcal{A}) \xrightarrow{F} \mathbf{H}(\mathsf{Mod}\text{-}\mathcal{B}) \xrightarrow{\mathrm{can}} \mathbf{D}(\mathsf{Mod}\text{-}\mathcal{B})$.

- 若有dg自然变换 $\gamma:F\to G$, 则有 **[左导出自然变换]** $\mathbf{L}\gamma:\mathbf{L}F\to\mathbf{L}G$, 定义为 $\mathbf{L}\gamma=\mathrm{can}\circ\gamma\circ\mathbf{p}$, 见上一条.

- 考虑dg $\mathcal{A}$-$\mathcal{B}$-双模 $X$, 使得 $X(A,B)=F(\widehat A)(B)$. 则对任意右dg $\mathcal{A}$-模 $M$ 有典范态射 $M(A)$ $=$ $\scHom_{\mathcal{A}}(\widehat{A},M)\xrightarrow{F}\scHom_{\mathcal{B}}(F\widehat{A},FM)$ $=$ $\scHom_{\mathcal{B}}(X(A,-),FM)$ $=$ $\scHom_{\mathcal{B}}(X,FM)(A)$, 从而有典范右dg $\mathcal{A}$-模同态 $M\to\scHom_{\mathcal{B}}(X,FM)$, 其伴随是右dg $\mathcal{B}$-模态射 $M\otimes_\mathcal{A}X\to FM$. 这给出了一个dg自然变换 $\gamma:-\otimes_\mathcal{A}X\to F$. 考虑左导出自然变换 $\mathbf{L}\gamma:-\otimes^\mathbf{L}_\mathcal{A}X\to\mathbf{L}F$. 对任意 $A\in\mathcal{A}$, $\mathbf{L}\gamma_{\widehat A}$ 由 $\gamma_{\widehat A}:\widehat A\otimes_\mathcal{A}X\to F(\widehat A)$ 给出, 根据构造, 这是同构.

  - 因此 $\mathbf{L}\gamma$ 限制在 $\mathsf{perf}(\mathsf{Mod}\text{-}\mathcal{A})$ 上是自然同构. 于是我们可以说: $F$ 与 $-\otimes_\mathcal{A}X$ 在完美导出范畴层面是一样的.
  - 当 $\mathbf{L}F$ 保持任意直和时, $\mathbf{L}\gamma$ 是自然同构. 结论: <u>任何保持直和的导出函子都是一个导出张量积函子.</u>

- 例: 任意dg函子 $F:\mathcal{A\to B}$ 均诱导了dg函子 $F^*:\mathsf{Mod}\text{-}\mathcal{B}\to\mathsf{Mod}\text{-}\mathcal{A}$, 从而有左导出函子 $\mathbf{L}F^*:\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{B})\to\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})$. 若 $F$ 是拟等价, 我们来证明 $\mathbf{L}F^*$ 是三角等价.

  - 根据拟等价的定义, 对任意 $B\in\mathcal{B}$, 存在 $A\in\mathcal{A}$ 和 $0$-次态射 $f:FA\to B$ 使得 $H^0(f)$ 是 $H^0\mathcal{B}$ 中的同构.
  - 对任意 $B\in\mathcal{B}$, 取 $A,f$ 如上. 定义dg模同态 $f_*:\widehat{A}\to F^*\widehat{B}$ 为如下的复合: $\widehat{A}=\mathcal{A}(-,A)\xrightarrow{F}\mathcal{B}(F(-),FA)\xrightarrow{f\circ}\mathcal{B}(F(-),B)=F^*\widehat{B}$. 因为 $F$ 是拟等价, $f$ 是 $H^0\mathcal{B}$ 中的同构, 所以 $f_*$ 是拟同构. 因此 $\mathbf{L}F^*$ 将一族紧生成子映为一族紧生成子.
  - 对任意 $B,B'\in\mathcal{B}$, 取 $A,A'\in\mathcal{A}$ 使得在 $H^0\mathcal{B}$ 中 $FA\cong B$, $FA'\cong B'$. 则 $\mathcal{A}(A,A')\xrightarrow{F}\mathcal{B}(FA,FA')\to\mathcal{B}(B,B')$ 是两个拟同构的复合. 从而 $\Hom_{\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{B})}(\widehat{B},\widehat{B'}[k])$ $\xrightarrow{F^*}$ $\Hom_{\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})}(F^*\widehat{B},F^*\widehat{B'}[k])$ $\xrightarrow{\text{q.is.}}$ $\Hom_{\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})}(\widehat{A},\widehat{A'}[k])$ 是同构. 因此 $F^*|\mathsf{perf}(\mathsf{Mod}\text{-}\mathcal{B})$ 是全忠实的.
  - 由dévissage, $F^*$ 是三角等价. **[证毕]**

##### 右导出函子

- 对任意dg $\mathcal{A}$-$\mathcal{B}$-双模 $X$, dg函子 $\scHom_{\mathcal{B}}(X,-):\mathsf{Mod}\text{-}\mathcal{B}\to\mathsf{Mod}\text{-}\mathcal{A}$ 保持同伦和映射锥, 从而诱导了三角函子 $\scHom_{\mathcal{B}}(X,-):\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{B})\to\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})$. 我们定义 **[导出张量积函子]** $\scHom_{\mathcal{B}}(X,-):\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{B})\to\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})$ 为如下复合函子 (第二行箭头理解为 $\mapsto$):
  $$
  \begin{CD}
  \mathbf{D}(\mathsf{Mod}\text{-}\mathcal{B}) @>\mathbf{i}>>
  \mathbf{H}(\mathsf{hInj}\text{-}\mathcal{B}) @>\scHom_{\mathcal{B}}(X,-)>>
  \mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A}) @>\mathrm{can}>>
  \mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})\\
  \\
  N @>>> \mathbf{i}N @>>> \scHom_{\mathcal{B}}(M,\mathbf{i}N) @>>> \scHom_{\mathcal{B}}(M,\mathbf{i}N)
  \end{CD}\notag
  $$

- 更一般地, 对任意dg函子 $F:\mathsf{Mod}\text{-}\mathcal{B}\to\mathsf{Mod}\text{-}\mathcal{A}$, 它的 **[右导出函子]** $\mathbf{R}F$ 定义为复合函子 $\mathbf{D}(\mathsf{Mod}\text{-}\mathcal{B}) \xrightarrow{\mathbf{i}} \mathbf{H}(\mathsf{hInj}\text{-}\mathcal{B}) \xrightarrow{F} \mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A}) \xrightarrow{\mathrm{can}} \mathbf{D}(\mathsf{Mod}\text{-}\mathcal{A})$.

- 若有dg自然变换 $\gamma:F\to G$, 则有 **[右导出自然变换]** $\mathbf{L}\gamma:\mathbf{L}F\to\mathbf{L}G$, 定义为 $\mathbf{L}\gamma=\mathrm{can}\circ\gamma\circ\mathbf{i}$, 见上一条.

### 预三角dg范畴

#### 平移对象

##### 正平移

- dg范畴 $\mathcal{A}$ 中对象 $A$ 的 **[正平移]**, 是指一个对象 $A'$, 使得下列等价条件之一成立:
  - $A'$ 是函子 $\scHom_\mathcal{A}(-,A)[1]:\mathcal{A}^{op}\to\mathcal{C}_{\mathrm{dg}}(\Bbbk)$ 的一个代表对象.
  - 有右dg $\mathcal{A}$-模同构 $\widehat{A'}\cong\widehat{A}[1]$.
  - 存在一个 $(-1)$-次闭同构 $A\to A'$.
- 若dg范畴 $\mathcal{A}$ 中任何对象 $A$ 都有正平移, 则称 $\mathcal{A}$ **[有正平移]**. 此时, 我们将构造一个 **[正平移函子]** $[1]:\mathcal{A}\to\mathcal{A}$:
  - 在对象上, 对任意对象 $A$, 选定它的一个正平移 $A[1]$ 和一个 $(-1)$-次闭同构 $s_A:A\to A[1]$. $[1]$ 将 $A$ 映为 $A[1]$;
  - 在态射上, $[1]:\mathcal{A}(A,B)\to\mathcal{A}(A[1],B[1])$, $f\mapsto(-1)^{|f|}s_B\circ f\circ s_A^{-1}$. 
  - 不难验证 $[1]:\mathcal{A}\to\mathcal{A}$ 是一个全忠实的dg函子.
  - 对任意 $n\geq1$, 定义 $[n]=[1]^{n}$.
- 正平移与dg函子与的相容性: 给定dg函子 $F:\mathcal{A\to B}$.
  - 若 $A\in\mathcal{A}$ 有正平移 $s_A:A\to A[1]$ , 则 $FA$ 有正平移 $Fs_A:FA\to F(A[1])$. 且对 $FA$ 的任一正平移 $s_{FA}:FA\to(FA)[1]$ 我们有dg同构 $\Phi_A=s_{FA}\circ(Fs_A)^{-1}:F(A[1])\to(FA)[1]$. 
  - 若 $\mathcal{A}$ 有正平移函子, 且 $F$ 是dg本质满的, 则 $\mathcal{B}$ 也有正平移函子.
  - 若 $\mathcal{A,B}$ 都有正平移函子, 则有dg自然变换 $\Phi:F\circ[1]\to[1]\circ F$, 其中 $\Phi_A=s_{FA}\circ(Fs_A)^{-1}:F(A[1])\to(FA)[1]$.

##### 负平移

- dg范畴 $\mathcal{A}$ 中对象 $A$ 的 **[负平移]**, 是指一个对象 $A'$, 使得下列等价条件之一成立:
  - $A'$ 是函子 $\scHom_\mathcal{A}(-,A)[-1]:\mathcal{A}^{op}\to\mathcal{C}_{\mathrm{dg}}(\Bbbk)$ 的一个代表对象.
  - 有右dg $\mathcal{A}$-模同构 $\widehat{A'}\cong\widehat{A}[-1]$.
  - 存在一个 $1$-次闭同构 $A\to A'$.
- 若dg范畴 $\mathcal{A}$ 中任何对象 $A$ 都有负平移, 则称 $\mathcal{A}$ **[有负平移]**. 此时, 我们将构造一个 **[负平移函子]** $[-1]:\mathcal{A}\to\mathcal{A}$:
  - 在对象上, 对任意对象 $A$, 选定它的一个平移 $A[-1]$ 和一个 $1$-次闭同构 $t_A:A\to A[-1]$. $[-1]$ 将 $A$ 映为 $A[-1]$;
  - 在态射上, $[-1]:\mathcal{A}(A,B)\to\mathcal{A}(A[-1],B[-1])$, $f\mapsto(-1)^{|f|}t_B\circ f\circ t_A^{-1}$. 
  - 不难验证 $[-1]:\mathcal{A}\to\mathcal{A}$ 是一个全忠实的dg函子.
  - 对任意 $n\geq1$, 定义 $[-n]=[-1]^{n}$.
- 负平移与dg函子与的相容性: 给定dg函子 $F:\mathcal{A\to B}$.
  - 若 $A\in\mathcal{A}$ 有负平移 $t_A:A\to A[-1]$ , 则 $FA$ 有负平移 $Ft_A:FA\to F(A[-1])$. 且对 $FA$ 的任一负平移 $t_{FA}:FA\to(FA)[-1]$ 我们有dg同构 $\Psi_A=t_{FA}\circ(Ft_A)^{-1}:F(A[-1])\to(FA)[-1]$. 
  - 若 $\mathcal{A}$ 有负平移函子, 且 $F$ 是dg本质满的, 则 $\mathcal{B}$ 也有负平移函子.
  - 若 $\mathcal{A,B}$ 都有负平移函子, 则有dg自然变换 $\Psi:F\circ[-1]\to[-1]\circ F$, 其中 $\Psi_A=t_{FA}\circ(Ft_A)^{-1}:F(A[-1])\to(FA)[-1]$.

##### 正平移与负平移相容性

- 若 $A$ 有正平移 $s_A:A\to A[1]$, 则 $A[1]$ 有负平移 $s_A^{-1}:A[1]\to A$, 从而 $(A[1])[-1]\cong A$.
- 若 $A$ 有负平移 $t_A:A\to A[-1]$, 则 $A[-1]$ 有正平移 $t_A^{-1}:A[-1]\to A$, 从而 $(A[-1])[1]\cong A$.
- 我们称dg范畴 $\mathcal{A}$ **[有平移]**, 且称 $[1]$ 为一个 **[平移函子]**, 如果下列等价命题之一成立:
  - $\mathcal{A}$ 既有正平移也有负平移;
  - $\mathcal{A}$ 有正平移, 且正平移函子 $[1]$ 是dg本质满的; 此时 $[1]$ 的一个dg拟逆是负平移函子;
  - $\mathcal{A}$ 有负平移, 且负平移函子 $[-1]$ 是dg本质满的; 此时 $[-1]$ 的一个dg拟逆是正平移函子.

#### 映射锥对象

##### dg态射范畴

- 对于dg范畴 $\mathcal{A}$, 定义 **[dg态射范畴]** $\op{Mor}_{\mathrm{dg}}(\mathcal{A})$:
  - 对象: 全体三元组 $(A,B,f)$, 其中 $A,B\in\mathcal{A}$ 是两个对象, $f:A\to B$ 是一个 $0$-次闭态射.
  - 态射: $\Hom_{\op{Mor}_{\mathrm{dg}}(\mathcal{A})}((A,B,f),(A',B',f'))^p$ $=$ $\left\{\begin{pmatrix}\alpha&0\\h&\beta\end{pmatrix}\mid\alpha\in\mathcal{A}(A,A')^p,\beta\in\mathcal{A}(B,B')^p, h\in\mathcal{A}(A,B')^{p-1}\right\}$.
  - 微分: $d\begin{pmatrix}\alpha&0\\h&\beta\end{pmatrix}=\begin{pmatrix}-d(\alpha)&0\\d(h)+f'\circ\alpha-(-1)^p\beta\circ f&d(\beta)\end{pmatrix}$, 其中 $p$ 是次数.
  - 复合: 由矩阵乘法给出.

##### 映射锥

- dg范畴 $\mathcal{A}$ 中 $0$-次闭态射 $f:A\to B$ 的 **[映射锥]**, 是指一个对象 $C_f$, 使得下列等价条件之一成立:
  - $C_f$ 是函子 $\Cone(\Hom_\mathcal{A}(-,f)):\mathcal{A}^{op}\to\mathcal{C}_{\mathrm{dg}}(\Bbbk)$ 的一个代表对象.
  - 有右dg $\mathcal{A}$-模同构 $\widehat{C_f}\cong\Cone(\widehat f:\widehat A\to\widehat B)$.
  - 存在一个图表 $\begin{xymatrix}(0,0)*+{B}="1",(25,0)*+{C_f}="2",(52,0)*+{A[1]}="3",\ar^{i_2} "1";"2"\ar@{..>}@/^/^{p_2} "2";"1"\ar^-{p_1} "2";"3"\ar@{..>}@/^/^-{i_1} "3";"2"\end{xymatrix}$, 其中:
    - $i_1,i_2,p_1,p_2$ 是 $0$-次态射;
    - $p_2\circ i_2=\mathbf{1}_B$, $p_1\circ i_1=\mathbf{1}_{A[1]}$, $i_1\circ p_1+i_2\circ p_2=\mathbf{1}_{C_f}$ (即: 若将 $\mathcal{A}$ 视为分次范畴, 则有同构 $C_f\cong A[1]\oplus B$).
    - $d(i_2)=0$, $d(p_1)=0$;
    - $d(i_1)=i_2\circ f\circ s_X^{-1}$, $d(p_2)=-d\circ s_X^{-1}\circ p_1$.
- 若dg范畴 $\mathcal{A}$ 中任何 $0$-次闭态射都有映射锥, 则称 $\mathcal{A}$ **[有映射锥]**. 此时, 我们将构造一个 **[映射锥函子]** $\Cone:\op{Mor}_{\mathrm{dg}}(\mathcal{A})\to\mathcal{A}$:
  - 在对象上: 对任意 $0$-次闭态射 $f:A\to B$ 选定一个映射锥 $\Cone(f)$ 连同一个图表 $\begin{xymatrix}(0,0)*+{B}="1",(30,0)*+{\Cone(f)}="2",(62,0)*+{A[1]}="3",\ar^-{i_2} "1";"2"\ar@{..>}@/^/^-{p_2} "2";"1"\ar^-{p_1} "2";"3"\ar@{..>}@/^/^-{i_1} "3";"2"\end{xymatrix}$. 函子 $\Cone$ 将 $(A,B,f)$ 映为 $\Cone(f)$.
  - 在态射上: 将 $\begin{pmatrix}\alpha&0\\h&\beta\end{pmatrix}:(A,B,f)\to(A',B',f')$ 映为态射 $\begin{pmatrix}(-1)^{|\alpha|}\alpha[1]&0\\h\circ s_A^{-1}&\beta\end{pmatrix}:\Cone(f)\to\Cone(f')$.
  - 不难验证 $\Cone:\op{Mor}_{\mathrm{dg}}(\mathcal{A})\to\mathcal{A}$ 是一个dg函子.
- 映射锥与平移的关系: 给定 $f:A\to B$, 则 $\Cone(f[1])\cong\Cone(f)[1]$.
- 映射锥与dg函子与的相容性: 给定dg函子 $F:\mathcal{A\to B}$.
  - 若 $0$-次闭态射 $f:A\to B$ 有**映射锥** $\Cone(f)$ , 则将 $F$ 作用于图表 $\begin{xymatrix}(0,0)*+{B}="1",(30,0)*+{\Cone(f)}="2",(62,0)*+{A[1]}="3",\ar^-{i_2} "1";"2"\ar@{..>}@/^/^-{p_2} "2";"1"\ar^-{p_1} "2";"3"\ar@{..>}@/^/^-{i_1} "3";"2"\end{xymatrix}$ 可知 $Ff$ 有映射锥 $F\Cone(f)$. 此外, 对于 $Ff$ 的任一映射锥 $\Cone(Ff)$ 连连同图表 $\begin{xymatrix}(0,0)*+{FB}="1",(35,0)*+{\Cone(Ff)}="2",(72,0)*+{(FA)[1]}="3",\ar^-{i'_2} "1";"2"\ar@{..>}@/^/^-{p'_2} "2";"1"\ar^-{p'_1} "2";"3"\ar@{..>}@/^/^-{i'_1} "3";"2"\end{xymatrix}$, 我们有dg同构 $\Phi_f:F\Cone(f)\to\Cone(Ff)$, $\Phi_f=i_1'\circ s_{FA}\circ F(s_A^{-1})\circ F(p_1)+i'_2\circ F(p_2)$.
  - 若 $\mathcal{A}$ 有映射锥函子, 且 $F$ 是dg本质满的, 则 $\mathcal{B}$ 也有映射锥函子.
  - 若 $\mathcal{A,B}$ 都有映射锥函子, 则有dg自然变换 $\Phi:F\circ\Cone\to\Cone\circ F:\op{Mor}_{\mathrm{dg}}(\mathcal{A})\to\mathcal{B}$, 其中 $\Phi_f$ 的表达式如上.

#### 零对象

- dg范畴 $\mathcal{A}$ 中的对象 $A$ 称为零对象, 如果 $\id_A=0$. 零对象通常记为.
  - 零对象的任意平移仍是零对象.
  - 对任意对象 $A\in\mathcal{A}$, 我们有 $\Cone(0\to A)\cong A$, $\Cone(A\to0)\cong A[1]$.

#### 预三角dg范畴

- dg范畴 $\mathcal{A}$ 称为 **[预三角dg范畴]**, 如果 $\mathcal{A}$ 有零对象, 有平移, 也有映射锥.

  - 以下当我们谈到预三角dg范畴时, 总是假定它已经选定了零对象、平移函子、映射锥函子.
  - 有映射锥, 意味着 $\mathcal{A}$ 有任意直和. 因此 $\mathcal{A}$ 是一个加法范畴.
  - 例: 任意dg范畴 $\mathcal{A}$ 的右dg模范畴 $\mathsf{Mod}\text{-}\mathcal{A}$ 都是预三角dg范畴. 注意到Yoneda嵌入给出了全忠实dg函子 $\Upsilon:\mathcal{A}\to\mathsf{Mod}\text{-}\mathcal{A}$, $A\mapsto\widehat{A}$.

- dg范畴 $\mathcal{A}$ 的一个 **[预三角包络]**, 是指一个预三角dg范畴 $\mathcal{A}^{\mathrm{pretr}}$ 和一个全忠实dg函子 $\Iota:\mathcal{A}\to\mathcal{A}^{\mathrm{pretr}}$ (从而可将 $\mathcal{A}$ 视为 $\mathcal{A}^{\mathrm{pretr}}$ 的dg全子范畴), 使得 $\mathcal{A}^{\mathrm{pretr}}$ 中包含 $\mathcal{A}$ 的最小预三角dg范畴就是 $\mathcal{A}^{\mathrm{pretr}}$ 本身.

  - 存在性: 考虑 $\mathsf{Mod}\text{-}\mathcal{A}$ 中包含 $\mathcal{A}$, 关于同构、平移、映射锥封闭, 且含零对象的最小dg子范畴, 将它记为 $\mathcal{A}^{\mathrm{pretr}}$. 则 $\Upsilon:\mathcal{A}\to\mathcal{A}^{\mathrm{pretr}}$ 是 $\mathcal{A}$ 的一个预三角包络.

    - **[推论]** $\mathcal{A}$ 是预三角dg范畴, 当且仅当 $\mathcal{A}^{\mathrm{pretr}}\subseteq\mathsf{Mod}\text{-}\mathcal{A}$ 中的任何对象都是一个可表模.

  - 泛性质: 若 $\mathcal{B}$ 是另一个预三角dg范畴, 则对任意dg函子 $F:\mathcal{A}\to\mathcal{B}$, 存在唯一的函子 $G:\mathcal{A}^{\mathrm{pretr}}\to\mathcal{B}$ 使得 $G\circ\Iota=F$. **[证明]** 递归定义 $\mathcal{A}^{\mathrm{pretr}}$ 的如下dg全子范畴: 
  
    - $\mathcal{A}^{\mathrm{pretr}}_0=\{X\mid X\cong0$ 或 $X\cong A[k],A\in\mathcal{A},k\in\mathbb{Z}\}$, 这里 $0$ 是 $\mathcal{A}^{\mathrm{pretr}}$ 的零对象;
    - $\mathcal{A}^{\mathrm{pretr}}_{n+1}=\{X\mid X\cong\Cone(f)$, 其中 $f$ 是 $\mathcal{A}^{\mathrm{pretr}}_n$ 中的某个 $0$-次闭态射$\}$.

    容易看到 $\mathcal{A}\subseteq\mathcal{A}^{\mathrm{pretr}}_0\subseteq\mathcal{A}^{\mathrm{pretr}}_1\subseteq\cdots\subseteq\mathcal{A}^{\mathrm{pretr}}_n\subseteq\mathcal{A}^{\mathrm{pretr}}_{n+1}\subseteq\cdots$, 且 $\mathcal{A}^{\mathrm{pretr}}=\bigcup_{n\geq0}\mathcal{A}^{\mathrm{pretr}}_n$. 我们将递归地构造函子 $G:\mathcal{A}^{\mathrm{pretr}}\to\mathcal{B}$.
  
    - 对于 $X\in\mathcal{A}^{\mathrm{pretr}}_0$, 设 $X\cong A[k]$ ($A\in\mathcal{A},k\in\mathbb{Z}$), 我们定义 $GX=(FA)[k]$. 
    - 对于 $X\in\mathcal{A}^{\mathrm{pretr}}_{n+1}$, 设 $X\cong\Cone(f)$ ($f\in Z^0\mathcal{A}^{\mathrm{pretr}}_n$), 我们定义 $GX=\Cone(Ff)$.

    不难验证以上方式良定义地给出了dg函子 $G:\mathcal{A}^{\mathrm{pretr}}\to\mathcal{B}$, 使得 $G\circ\Iota=F$.
  
  - 唯一性: 泛性质说明, $\mathcal{A}$ 的预三角包络在dg自然等价的意义下是唯一的.

##### 扭曲复形

- 记号约定:

  - 设 $\mathcal{A}$ 有平移, 且假设平移函子 $[1]:\mathcal{A}\to\mathcal{A}$ 是一个dg同构, $[-1]=[1]^{-1}$ (当 $[1]$ 只是dg等价时, 我不知道如何处理本小节内容). 我们记 $\Sigma^k:A\to A[k]$ 为典范的 $(-k)$-次同构. 具体地,
    - 当 $k>0$ 时, $[k]=s_{A[k-1]}\circ\cdots\circ s_A:A\to A[1]\to\cdots\to A[k-1]\to A[k]$.
    - 当 $k<0$ 时, $[k]=t_{A[k+1]}\circ\cdots\circ t_A:A\to A[-1]\to\cdots\to A[k+1]\to A[k]$.
  - 对任意 $A,B\in\mathcal{A}$ 和任意 $k,l\in\mathbb{Z}$, 有链复形的典范同构 $\Phi:\mathcal{A}(A[k],B[l])\to\mathcal{A}(A,B)[l-k]$, $f\mapsto(-1)^{k|f|}\Sigma^{-l}\circ f\circ\Sigma^k$, 这里右端元素视为属于 $\mathcal{A}(A,B)[l-k]$.
  - 对任意对象 $A,B,C\in\mathcal{A}$, 我们有典范态射 $\mathcal{A}(B,C)[l]\otimes\mathcal{A}(A,B)[k]\to\mathcal{A}(A,C)[k+l]$, $g\otimes f\mapsto(-1)^{k|g|}\Sigma^{k+l}(\Sigma^{-l}(g)\circ\Sigma^{-k}(f))$, 这里 $\Sigma$ 代表复形的平移态射. 它满足交换图表

  $$
  \begin{CD}
  	\mathcal{A}(B[k],C[k+l])\otimes\mathcal{A}(A,B[k]) @>\text{通常复合}>>
  	\mathcal{A}(A,C[k+l])\\
  	@V{\Phi\otimes\Phi}VV @VV{\Phi}V\\
  	\mathcal{A}(B,C)[l]\otimes\mathcal{A}(A,B)[k] @>>>
  	\mathcal{A}(A,C)[k+l].
  \end{CD}
  $$

- 对于dg范畴 $\mathcal{A}$, 我们定义其上 **[扭曲复形的dg范畴]** $\Tw(\mathcal{A})$:

  - 对象: $\mathcal{A}$ 上的扭曲复形. 所谓 **[扭曲复形]** 是一个二元组 $(E,q)$, 其中
    - $E$ 是由 $\mathcal{A}$ 中一些对象 $E_1,\cdots,E_n$ 和一些整数 $r_1,\cdots,r_n$ 构成的集合 (允许重复), 常形式地记为 $E=\bigoplus_{i=1}^nE_i[r_i]$;
    - $q=(q_{ij})_{n\times n}$ 是一个严格下三角矩阵, 其中当 $i>j$ 时 $q_{ij}\in\mathcal{A}(E_j,E_i)[r_i-r_j]^1$;
    - $q$ 满足 **[Maurer–Cartan 方程]** $d(q)+q^2=0$, 其中 $d(q)=(d_{\mathcal{A}(E_j,E_i)[r_i-r_j]}(q_{ij}))$, $q^2$ 是矩阵乘法.

  - 态射: 扭曲复形的态射 $f:(E,q)\to(E',q')$ 定义如下:
    - $f=(f_{ij})$ 是由态射构成的矩阵, 其中 $f_{ij}\in\mathcal{A}(E_j,E'_i)[r'_i-r_j]$;
    - $|f|=p$ 如果 $f_{ij}\in\mathcal{A}(E_j,E'_i)[r'_i-r_j]^p$, $\forall i,j$.
  - 复合: 由矩阵乘法给出;
  - 微分: $d_{\Tw(\mathcal{A})}(f)=d(f_{ij})+q'f-(-1)^{|f|}fq$.


**[定理]** $\Tw(\mathcal{A})$ 是 $\mathcal{A}$ 的一个预三角包络.

**[证明]** 分为四步. <u>**第一步:**</u> $\Tw(\mathcal{A})$ 是一个dg范畴.

- 首先, $\Tw(\mathcal{A})$ 的对象、态射、复合都是良定义的. 对任意扭曲复形 $(E,q)$, 考虑单位矩阵 $\id_{(E,q)}=\op{diag}(\id_{E_1},\cdots,\id_{E_n})$, 其中 $\id_{E_i}\in\Hom_\mathcal{A}(E_i,E_i)[r_i-r_i]^0$, 不难验证它给出了恒等态射. 态射集上有分次 $\Bbbk$-模结构, 复合是双线性且保分次的, 因此 $\Tw(\mathcal{A})$ 是一个分次范畴. 

- 我们必须验证 $d_{\Tw(\mathcal{A})}$ 是一个微分. 显然 $d_{\Tw(\mathcal{A})}$ 是 $1$-次同态. 对于态射 $f:(E,q)\to(E',q')$ 和 $g:(E',q')\to(E'',q'')$, 直接计算可得
  $$
  \begin{aligned}
  	d_{\Tw(\mathcal{A})}^2(f)
  	&= d_{\Tw(\mathcal{A})}( d(f)+q'f-(-1)^{|f|}fq)\\
  	&= d\big( d(f)+q'f-(-1)^{|f|}fq\big)+q'\big( d(f)+q'f-(-1)^{|f|}fq\big)-(-1)^{|f|+1}\big( d(f)+q'f-(-1)^{|f|}fq\big)q\\
  	&= d(q'f)-(-1)^{|f|} d(fq)+q' d(f)+q'^2f-(-1)^{|f|}q'fq+(-1)^{|f|} d(f)q+(-1)^{|f|}q'fq-fq^2\\
  	&= d(q')f-q' d(f)-(-1)^{|f|}( d(f)q+(-1)^{|f|}f d(q))+q' d(f)+q'^2f+(-1)^{|f|} d(f)q-fq^2\\
  	&=-q'^2f-q' d(f)-(-1)^{|f|} d(f)q+fq^2+q' d(f)+q'^2f+(-1)^{|f|} d(f)q-fq^2\\
  	&=0,\\
  	 d_{\Tw(\mathcal{A})}(g\circ f)
  	&= d(gf)+q''gf-(-1)^{|f|+|g|}gfq\\
  	&= d(g)f+(-1)^{|g|}g d(f)+q''gf-(-1)^{|g|}gq'f+(-1)^{|g|}gq'f-(-1)^{|f|+|g|}gfq\\
  	&= d(g)f+q''gf-(-1)^{|g|}gq'f+(-1)^{|g|}g d(f)+(-1)^{|g|}gq'f-(-1)^{|f|+|g|}gfq\\
  	&=( d(g)+q''g-(-1)^{|g|}gq')f+(-1)^{|g|}g( d(f)+q'f-(-1)^{|f|}fq)\\
  	&= d_{\Tw(\mathcal{A})}(g)\circ f+(-1)^{|g|}g\circ  d_{\Tw(\mathcal{A})}(f).
  \end{aligned}
  $$

<u>**第二步:**</u> $\Tw(\mathcal{A})$ 有平移函子.

- 定义平移对象: 扭曲复形 $(E=\bigoplus_{i=1}^nE_i[r_i],q)$ 的平移对象定义为 $(E,q)[1]=(E[1],q[1])$, 其中 $E[1]=\bigoplus_{i=1}^nE_i[r_i+1]$, $q[1]=q$. 这样定义的 $(E,q)[1]$ 显然满足 Maurer–Cartan 方程, 因此 $(E,q)[1]$ 确实是一个扭曲复形.

- 验证它是平移对象: 定义 $(-1)$-次态射 $s_{(E,q)}:(E,q)\to(E,q)[1]$ 为对角矩阵 $s_{(E,q)}=\op{diag}((-1)^{r_i}\id_{E_i})$, 其中 $\id_{E_i}\in\Hom_{\mathcal{A}}(E_i,E_i)[-1]^{-1}$. 它显然是分次同构. 我们验证它是闭的:
  $$
  \begin{aligned}
  	 d_{\Tw(\mathcal{A})}(s_{(E,q)})
  	&= d(s_{(E,q)})+q[1]s_{(E,q)}-(-1)^{|s_{(E,q)}|}s_{(E,q)}q\\
  	&=qs_{(E,q)}+s_{(E,q)}q\\
  	&=(-(-1)^{r_j}q_{ij})+((-1)^{r_i-r_j}(-1)^{r_i}q_{ij})\\
  	&=0.
  \end{aligned}
  $$

<u>**第三步:**</u> $\Tw(\mathcal{A})$ 有映射锥函子.

- 定义映射锥对象: 对于 $0$-次闭态射 $f:(E,q)\to(E',q')$, 我们定义映射锥 $\Cone(f)$ 为 $(E[1]\oplus E',Q)$, 其中 $Q=\begin{pmatrix}q[1]&0\\f'&q\end{pmatrix}$, 这里的 $q[1]=q$ 如上, $f'=(f'_{ij})$ 中的 $f'_{ij}\in\Hom_{\Tw(\mathcal{A})}(E_j,E'_i)[r'_i-(r_j+1)]^1$ 是与 $f_{ij}\in\Hom_{\Tw(\mathcal{A})}(E_j,E'_i)[r'_i-r_j]^0$ 对应的元素.

- 验证Maurer–Cartan方程：由 $f\in Z^0$ 可知 $ d(f)+q'f-fq=0$, 再由 $d(f)=- d(f'),q'f=-q'f',fq=f'q$ 可得 $ d(f')+q'f'-(-1)^{|f'|}f'q=0$, 于是
  $$
  \begin{aligned}
  	 d(Q)+Q^2
  	&=\begin{pmatrix} d(q')& d(f')\\0& d(q)\end{pmatrix}+\begin{pmatrix}q'^2&q'f'+f'q\\0&q^2\end{pmatrix}\\
  	&=\begin{pmatrix} d(q')+q'^2& d(f')+q'f'+f'q\\0& d(q)+q^2\end{pmatrix}
  	=\begin{pmatrix}0&0\\0&0\end{pmatrix}.
  \end{aligned}
  $$
  因此 $\Cone(f)$ 是一个扭曲复形.

- 验证这是映射锥对象: 为了验证 $\Cone(f)$ 是 $f$ 的一个锥对象, 考虑图表 $\begin{xymatrix}(0,0)*+{(E,q)}="1",(30,0)*+{\Cone(f)}="2",(62,0)*+{(E',q')}="3",\ar^-{i_2} "1";"2"\ar@{..>}@/^/^-{p_2} "2";"1"\ar^-{p_1} "2";"3"\ar@{..>}@/^/^-{i_1} "3";"2"\end{xymatrix}$, 其中  $i_2=\begin{pmatrix}\id_{E'}&0\end{pmatrix}, p_1=\begin{pmatrix}0\\\id_{E[1]}\end{pmatrix}, i_1=\begin{pmatrix}0&\id_{E[1]}\end{pmatrix}, p_2=\begin{pmatrix}\id_{E'}\\0\end{pmatrix}$. 这四个态射都是 $0$-次态射, 且不难验证下列等式: $p_2\circ i_2=\id_{E'}$, $p_1\circ i_1=\id_{E[1]}$, $i_1\circ p_1+i_2\circ p_2=\id_{\Cone(f)}$, $ d(i_2)=0$, $ d(p_1)=0$, $ d(i_1)=i_2\circ f\circ\beta_{(E,q)}$, $ d(p_2)=-f\circ\beta_{(E,q)}\circ p_1$. 因此 $\Cone(f)$ 是 $f$ 的一个锥对象.

<u>**第四步:**</u> $\Tw(\mathcal{A})$ 是 $\mathcal{A}$ 的一个预三角包络.

- 我们构造一个全忠实的dg函子 $\mathcal{A}\to\Tw(\mathcal{A})$:
  - 在对象上, 将对象 $A$ 映为扭曲复形 $(A[0],0)$;

  - 在态射上, 将态射 $f\in\mathcal{A}(A,B)$ 映为 $(f)\in\Hom_{\Tw(\mathcal{A})}((A[0],0),(B[0],0))$.
- 为了说明它是dg本质满的, 我们给出如下构造: 任取扭曲复形 $(E=\bigoplus_{i=1}^nE_i[r_i],q=(q_{ij}))$, 令 $E'=(E_1[r_1-1],0)$, $E''=(\bigoplus_{i=2}^nE_i[r_i],(q_{ij})_{2\leq j<i\leq n})$, 则有态射 $f=(q'_{21},\cdots,q'_{n1})^T:E'\to E''$, 其中 $q'_{i1}\in\mathcal{A}(E_1,E_i)[r_i-(r_1-1)]^0$ 是与 $q_{i1}\in\mathcal{A}(E_1,E_i)[r_i-r_1]^1$ 对应的元素. 利用 $d(q)+q^2=0$ 以及分块矩阵乘法, 可见 $f$ 是一个 $0$-次闭态射, 且根据映射锥的构造可知 $E\cong\Cone(f)$. 据此, 归纳可知 $E$ 是从 $E_1,\cdots,E_n$ 出发, 作平移之和映射锥得到的对象. **[证毕]**

##### 三角结构

**[定理]** 设 $\mathcal{A}$ 是一个预三角dg范畴. 则 $Z^0\mathcal{A}$ 有一个典范的Frobenius范畴结构, 使得其稳定范畴就是 $H^0\mathcal{A}$. 从而 $H^0\mathcal{A}$ 是一个三角范畴.

- 例: 若 $\mathcal{A}$ 是一个dg范畴, 则 $\mathsf{Mod}\text{-}\mathcal{A}$ 是一个预三角dg范畴, 而 $H^0\mathcal{A}$ 就是同伦范畴 $\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})$.

- **[证明概要]** 一个不用Frobenius范畴理论的证明, 参见《The Stacks Project》Section [09P5](https://stacks.math.columbia.edu/tag/09P5).**[证毕]**

- dg范畴 $\mathcal{A}$ 的 **[三角包络]** $\mathcal{A}^{\mathrm{tr}}$ 定义为三角范畴 $H^0(\mathcal{A}^{\mathrm{pretr}})$.

- 例: 若 $\mathcal{A}$ 是一个dg范畴, 则 $\mathsf{Mod}\text{-}\mathcal{A}$ 是一个预三角dg范畴, 而 $H^0\mathcal{A}$ 就是同伦范畴 $\mathbf{H}(\mathsf{Mod}\text{-}\mathcal{A})$.
